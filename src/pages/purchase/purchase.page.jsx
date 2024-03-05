import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors, globalStyles } from "styles/global.style";
import { useHistory } from "react-router";
// import { PurchaseSuccess } from "utils/analytics";
import axios from "utils/axios.util";
import ErrorBoundary from "utils/error_boundary.util";

function PurchasePage() {
  const history = useHistory();
  const session_data = sessionStorage.getItem("purchase_data");
  const [data, setData] = React.useState(session_data ? JSON.parse(session_data) : {});

  React.useEffect(() => {
    if (Object.keys(data).length === 0) {
      var queries = new URLSearchParams(history.location.search);
      var query_data = {};
      for (const [key, value] of queries.entries()) query_data[key] = value;
      if (Object.keys(query_data).length) {
        history.replace("/purchase");
        // PurchaseSuccess(
        //   query_data.title,
        //   query_data.entity_type,
        //   [query_data.entity_id],
        //   parseFloat(query_data.amount),
        // );
        sessionStorage.setItem("purchase_data", JSON.stringify(query_data));
        setData(query_data);
      } else {
        history.replace("/404");
      }
    }
  }, [data, history]);

  React.useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const href = import.meta.env.VITE__MY_COURSES_URL || "https://school.valuationary.com/enrollments";
      const {
        data: { payload },
      } = await axios.post("/auth/sso", {});
      let query_with_sso = new URLSearchParams(window.location.search);
      query_with_sso.set("ssoToken", payload);
      const url = [href, query_with_sso.toString()].join("?");
      window.location = url;
    }, 20 * 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  });

  return (
    <ErrorBoundary>
      <div className={css(styles.messageWrapper, globalStyles.contentMaxWidthAlignment)}>
        <div className={css(styles.message)}>
          <h1>Payment was processed successfully!</h1>
          <p>Please wait for approx 2 mins to process the enrollment.</p>
          <p>
            If this is your first purchase on our platform, You will receive your account information via email shortly.
            <br />
            Proceed to dashboard by following instructions mentioned in the email.
          </p>
          <hr className={css(styles.seperator)} />
          <p>You will be redirected to your dashboard shortly.</p>
          <div>
            <button
              className={css(globalStyles.resetButtonCSS, styles.redirectButton)}
              onClick={() =>
                (window.location =
                  import.meta.env.VITE__MY_COURSES_URL || "https://school.valuationary.com/enrollments")
              }
            >
              Go to dashboard now
            </button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",

    width: "100vw",
    height: "100vh",
  },
  message: {
    textAlign: "center",
    "& h1": {
      marginBottom: "8rem",
      fontSize: "5rem",
    },
    "& p": {
      fontSize: "2rem",
      marginBottom: "1.6rem",
    },
  },
  seperator: {
    borderTop: "1px solid black",
    margin: "4rem 0",
  },
  redirectButton: {
    width: "fit-content",
    padding: "1.2rem 3.6rem",
    marginTop: "2rem",

    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: "2rem",
    fontWeight: "700",
    borderRadius: "0.8rem",
    boxShadow: "0 1.5rem 1rem -1rem rgba(0,0,0,0.15)",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
    "@media only screen and (max-width: 25em)": {
      padding: "1.2rem 1.8rem",
    },
  },
});

export default PurchasePage;
