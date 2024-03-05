import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./what_is_job_program.module.scss";
const css = classnames.bind(styles);

const WhatIsJobProgram = () => {
  return (
    <ErrorBoundary>
      <div className={css("what_is_job_program")}>
        <div className={css("what_is_job_program__left", "details")}>
          <h2 className={css("title2", "details__title")}>What exactly is Job program?</h2>
          <div className={css("details__description", "textDull")}>
            <p>
              A Job Program bridges the gap between the education gained from colleges or pursuing professional courses
              and the actual skills & other advanced concepts that are required to excel at niche career roles.
            </p>
            <p>
              At Valuationary, Industry Leaders themselves teach and train candidates, making them job-ready, through an
              ideal blend of recorded lectures and live session over the span of two months. The candidates interact
              with the lecturer, work on their concepts, and submit regular assignments in a positive feedback loop in
              order to ensure their upskilling is comprehensive. Then, our Placement Team works with the candidates
              helping them readying their CVs, preparing them for the recruitment procedures and subsequently getting
              them placed in some of India’s most esteemed companies.
            </p>
          </div>
        </div>
        <div className={css("what_is_job_program__right")}>
          <div className={css("imageWrapper")}>
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/job_programs/what_is_job_program.webp"
              className={css("image--landscape")}
              width="746px"
              height="711px"
              alt="what_is_job_program"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default WhatIsJobProgram;
