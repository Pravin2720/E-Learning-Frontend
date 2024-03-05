import React from "react";

import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./program_overview.module.scss";
const css = classnames.bind(styles);

const ProgramOverview = ({ overviewSteps }) => {
  return (
    <ErrorBoundary>
      <div className={css("program-overview")}>
        {overviewSteps.map(({ icon, title, subtitle }, index) => (
          <div key={index} className={css("overviewStep")}>
            <div className={css("overviewStep__left")}>
              <img src={icon} alt="overview step icon" className={css("icon")} />
            </div>
            <div className={css("overviewStep__right")}>
              <h4 className={css("title4")}>{title}</h4>
              <p className={css("paragraph", "textDull")}>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default ProgramOverview;
