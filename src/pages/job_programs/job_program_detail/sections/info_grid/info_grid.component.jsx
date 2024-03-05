import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./info_grid.module.scss";
const css = classnames.bind(styles);

const InfoGrid = ({ registration_last_date, batch_start_date, duration_in_months, eligibility }) => {
  return (
    <ErrorBoundary>
      <div className={css("infoGrid")}>
        <div style={{ "--idx": "a1" }}>
          <h4 className={css("title4")}>{"Fully\nonline"}</h4>
          <span className={css("paragraph", "textDull")}>Format</span>
        </div>
        <div style={{ "--idx": "a2" }}>
          <h4 className={css("title4")}>{`${duration_in_months || "-"}\nmonths`}</h4>
          <span className={css("paragraph", "textDull")}>Program duration</span>
        </div>
        <div style={{ "--idx": "a3" }}>
          <h4 className={css("title4")}>{(registration_last_date || "-").split(",").join(".\n")}</h4>
          <span className={css("paragraph", "textDull")}>Last date of registration</span>
        </div>
        <div style={{ "--idx": "a4" }}>
          <h4 className={css("title4")}>{(batch_start_date || "-").split(",").join(".\n")}</h4>
          <span className={css("paragraph", "textDull")}>Start date</span>
        </div>
        <div style={{ "--idx": "a5" }}>
          <h4 className={css("title4")}>{eligibility || "-"}</h4>
          <span className={css("paragraph", "textDull")}>Eligibility</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default InfoGrid;
