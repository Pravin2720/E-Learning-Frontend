import React from "react";
import ReactModal from "react-modal";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./modal.module.scss";
const css = classnames.bind(styles);

const Modal = ({ className, overlayClassName, style, show, close, children }) => {
  React.useEffect(() => ReactModal.setAppElement("#root"));

  return (
    <ErrorBoundary>
      <ReactModal
        isOpen={show}
        style={style}
        className={css("customContent", className)}
        overlayClassName={css("customOverlay", overlayClassName)}
        onRequestClose={close}
        onAfterOpen={() => (document.getElementById("scrollBody").style.overflow = "hidden")}
        onAfterClose={() => (document.getElementById("scrollBody").style.overflow = "overlay")}
      >
        <button href="#" onClick={close} className={css("closeButton")}>
          &times;
        </button>
        {children}
      </ReactModal>
    </ErrorBoundary>
  );
};

export default Modal;
