import React from "react";
import { useHistory } from "react-router";
import { StyleSheet, css } from "aphrodite-jss";
import axios from "utils/axios.util";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

const useAuthContext = CustomLazy(import(/* webpackChunkName: "useAuthContext" */ "contexts/auth.context"));

function Redirect() {
  const history = useHistory();
  const authContext = useAuthContext();

  var defaultURL = new URLSearchParams(history.location.search).get("url");
  const [newURL, setNewURL] = React.useState(defaultURL);
  const updateLocation = () => (window.location = newURL);

  React.useEffect(() => {
    if (import.meta.env.VITE__THINKIFIC_SSO_URL) {
      console.log("SSO Enabled");
      const agree = document.getElementById("agree");
      const error = document.getElementById("error");

      const query = new URLSearchParams(history.location.search);
      const newQuery = new URLSearchParams();

      if (!authContext || !authContext.user) {
        let query = new URLSearchParams();
        query.set("returnurl", history.location.pathname + history.location.search);
        history.push("/login?" + query.toString());
        return;
      }

      newQuery.set(
        "error_url",
        window.location.protocol + "://" + window.location.hostname + ":" + window.location.port + "/404",
      );

      if (agree) {
        agree.setAttribute("hidden", "hidden");
      }
      axios
        .post("/auth/thinkific")
        .then((resp) => {
          if (resp.status === 403 && resp.data) {
            throw resp;
          }

          if (resp.status === 200 && resp.data && resp.data.payload) {
            const payload = resp.data.payload;
            newQuery.set("jwt", payload);
            if (query.has("url")) {
              newQuery.set("returnurl", query.get("url"));
            }
            const new_url = import.meta.env.VITE__THINKIFIC_SSO_URL + "?" + newQuery.toString();
            setNewURL(new_url);
            if (agree) {
              agree.removeAttribute("hidden");
            }
          }
        })
        .catch((err) => {
          console.log("error in generating Thinkific JWT Payload", err);
          if (error) {
            error.innerText += JSON.stringify(err);
            error.removeAttribute("hidden");
          }
        });
    }
  }, [authContext, history]);

  if (
    authContext &&
    authContext.paneluser &&
    authContext.paneluser.roles &&
    authContext.paneluser.roles.map((role) => role.name).indexOf("admin") !== -1
  ) {
    return (
      <ErrorBoundary>
        <div>
          <div>
            SSO URL: {import.meta.env.VITE__THINKIFIC_SSO_URL ? import.meta.env.VITE__THINKIFIC_SSO_URL : "Disabled"}
          </div>
          <hr />
          <div>Redirecting to: {newURL}</div>
          <hr />
          <div id="agree" className={css(styles.btnAgree)} onClick={updateLocation}>
            Agree to Redirect to an external site
          </div>
          <hr />
          <div id="error" className={css(styles.btnErr)} hidden={true}>
            Error:
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div>
        Redirecting to: {defaultURL}
        <div>
          {setTimeout(() => {
            updateLocation();
          }, 1000)}
        </div>
      </div>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  btnAgree: {
    backgroundColor: "yellowgreen",
  },
  btnErr: {
    backgroundColor: "orangered",
  },
});

export default Redirect;
