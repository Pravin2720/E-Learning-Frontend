import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./sticky.module.scss";
const css = classnames.bind(styles);

const Sticky = ({ sticky, children }) => {
  return (
    <ErrorBoundary>
      <div className={css("sticky")}>
        <div className={css("sticky__right")}>{sticky}</div>
        <div className={css("sticky__left")}>{children}</div>
      </div>
    </ErrorBoundary>
  );
};

export default Sticky;
