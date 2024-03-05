import React from "react";
import { Interweave } from "interweave";
import { useRecoilState } from "recoil";
import { notificationClosedAtom } from "states/notification/notification.atoms";
import axios from "utils/axios.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./notification_bar.module.scss";
const css = classnames.bind(styles);

const NotificationBar = () => {
  const [msg, setMsg] = React.useState("");
  const [msgAnimate, setMsgAnimate] = React.useState(true);
  const [msgClosed, setMsgClosed] = useRecoilState(notificationClosedAtom);
  const max_length = msg.split("\n").reduce((p, c) => Math.max(p.length, c.length));

  React.useEffect(() => {
    axios
      .get(
        import.meta.env.NODE_ENV === "production"
          ? `https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/notifications/${window.location.hostname}.json`
          : `${window.location.origin}/test_notification.json`,
      )
      .then((response) => {
        const { message, animate } = response?.data ?? {};
        !!message && msg !== message && setMsg(message) && setMsgClosed(false);
        typeof animate === "boolean" && msgAnimate !== animate && setMsgAnimate(animate);
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <div id="notification-bar" className={css("notification", !msgClosed && msg && "notification__visible")}>
        <div className={css("notification__message", "paragraph")}>
          <p
            style={{ "--length": max_length }}
            className={css("notification__block", msgAnimate && "notification__block--animate")}
          >
            {msg.split("\n").map((msg, index) => (
              <span key={index} className={css("notification__line")}>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Interweave content={msg} />
                </React.Suspense>
              </span>
            ))}
          </p>
          <button className={css("reset-button", "notification__closeBtn")} onClick={() => setMsgClosed(true)}>
            &times;
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default NotificationBar;
