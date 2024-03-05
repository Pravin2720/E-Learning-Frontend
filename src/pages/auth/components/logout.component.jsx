import React from "react";
import { useHistory } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom, userStatusSelector } from "states/user/user.atoms";

import { handleRedirect } from "utils";
import axios from "utils/axios.util";
import { useSyncCart } from "utils/cart.util";
import ErrorBoundary from "utils/error_boundary.util";

import Link from "components/link/link.component";

import classnames from "classnames/bind";
import styles from "../auth.module.scss";
const css = classnames.bind(styles);
class actionStatus {
  static Pending = new actionStatus("pending");
  static Trigger = new actionStatus("trigger");
  static Complete = new actionStatus("complete");
  static Error = new actionStatus("error");

  constructor(name) {
    this.name = name;
  }
}

const Logout = () => {
  const history = useHistory();
  const return_to_path = React.useMemo(() => {
    const query = new URLSearchParams(history.location.search);
    return query.has("returnurl") && decodeURIComponent(query.get("returnurl"));
  }, [history.location.search]);
  const query = new URLSearchParams(history.location.search);
  const login_url = ["/login", query.toString()].join("?");
  const userStatus = useRecoilValue(userStatusSelector);
  const setUser = useSetRecoilState(userAtom);
  const syncCart = useSyncCart();

  const [loggingOut, setLoggingOut] = React.useState(actionStatus.Pending);
  const [clearingCart, setClearingCart] = React.useState(actionStatus.Pending);
  const [redirecting, setRedirecting] = React.useState(actionStatus.Pending);

  React.useEffect(() => {
    if (userStatus) {
      loggingOut === actionStatus.Pending && setLoggingOut(actionStatus.Trigger);
    } else {
      clearingCart === actionStatus.Pending && setClearingCart(actionStatus.Trigger);
    }
  }, [clearingCart, loggingOut, userStatus]);

  React.useEffect(() => {
    if (loggingOut !== actionStatus.Trigger) return;

    if (!userStatus) {
      setLoggingOut(actionStatus.Complete);
      return;
    }

    (async () => {
      try {
        const result = await axios.post("/auth/logout", {});
        if (result?.status === 200) {
          setUser(null);
          setLoggingOut(actionStatus.Complete);
        } else throw result;
      } catch (error) {
        console.error(error);
        setLoggingOut(actionStatus.Error);
      }
    })();
  }, [loggingOut, setUser, userStatus]);

  React.useEffect(() => {
    if (clearingCart !== actionStatus.Trigger) return;
    if (userStatus) return;

    (async () => {
      await syncCart([]);
      setClearingCart(actionStatus.Complete);
      loggingOut === actionStatus.Pending && setLoggingOut(actionStatus.Complete);
    })();
  }, [clearingCart, loggingOut, syncCart, userStatus]);

  React.useEffect(() => {
    if (loggingOut !== actionStatus.Complete || clearingCart !== actionStatus.Complete) return;
    if (!return_to_path) return;

    setRedirecting(actionStatus.Trigger);
    const timeoutID = setTimeout(() => handleRedirect(history, return_to_path), 5000);
    return () => clearTimeout(timeoutID);
  }, [clearingCart, history, loggingOut, return_to_path]);

  return (
    <ErrorBoundary>
      {/* <div className={css("wrapper")}> */}
      <div>
        <h4 className={css("title4")}>{loggingOut === actionStatus.Complete ? "Logged Out!" : "Logging Out..."}</h4>
        {loggingOut === actionStatus.Error && <span>Something went wrong!</span>}
      </div>
      {redirecting === actionStatus.Trigger && (
        <div>
          <br />
          Redirecting to <span className={css("textHighlighted")}>{return_to_path}</span>
          <br />
        </div>
      )}
      <br />
      {(loggingOut === actionStatus.Complete || loggingOut === actionStatus.Error) && (
        <Link
          navigateTo={login_url}
          className={css("reset-link", "button", "button__style--solid", "button__size--sm")}
          onClick={loggingOut === actionStatus.Error ? () => (window.location = window.location.href) : null}
        >
          {loggingOut === actionStatus.Error ? "Try again" : "Log in again"}
        </Link>
      )}
      {/* </div> */}
    </ErrorBoundary>
  );
};

export default Logout;
