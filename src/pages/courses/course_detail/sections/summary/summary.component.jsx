import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./summary.module.scss";
const css = classnames.bind(styles);

const Summary = ({ summary, entity }) => {
  return (
    <ErrorBoundary>
      <div className={css("summary")}>
        <span className={css("subtitle")}>This {entity} includes :</span>
        {summary.map((i, index) => (
          <div className={css("summary__step")} key={index}>
            <img src={i.icon} alt="icon" width="32px" height="32px" className={css("stepIcon")} />
            <p>{i.title}</p>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default Summary;
