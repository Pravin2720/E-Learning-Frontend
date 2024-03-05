import React from "react";

import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./program_fee.module.scss";
const css = classnames.bind(styles);

const ProgramFee = () => {
  return (
    <ErrorBoundary>
      <div className={css("programFee")}>
        <div className={css("programFee__left")}>
          <div className={css("imageWrapper")}>
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/job_programs/ProgramFee.webp"
              alt="program fee"
              className={css("image--landscape")}
            />
          </div>
        </div>
        <div className={css("programFee__right", "textPoppins")}>
          <h3 className={css("title3")}>20% Success Fee</h3>
          <p className={css("paragraph", "textDullDark", "description")}>
            <span className={css("paragraph--poppins")}>
              The fee is charged at 20% for your first 6 months salary.&nbsp;
            </span>
            We ask for a<span className={css("paragraph--poppins")}>&nbsp;fully&nbsp;refundable&nbsp;</span>
            deposit of <span className={css("textDMSans")}>₹ </span> 10,000. Since there are limited seats, we don't
            want someone else to take away the opportunity from you by false confirmations. The deposit will be refunded
            on
            <span className={css("paragraph--poppins")}>&nbsp;completion&nbsp;</span>of the program.
          </p>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProgramFee;
