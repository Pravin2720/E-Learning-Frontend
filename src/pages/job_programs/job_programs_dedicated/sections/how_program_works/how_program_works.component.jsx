import React from "react";
import MockData from "data/index";

import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./how_program_works.module.scss";
const css = classnames.bind(styles);

const HowProgramWorks = () => {
  return (
    <ErrorBoundary>
      <div className={css("howProgramWorks")}>
        {MockData.program_steps.map(({ title, subtitle, img_url }, index) => (
          <div className={css("stepCard")} key={index}>
            <img
              src={img_url}
              alt={title}
              width="74px"
              height="74px"
              className={css("stepCard__image")}
              loading="lazy"
            />
            <span className={css("subtitle", "textBold")}>{`${index + 1}. ${title}`}</span>
            <span className={css("paragraph")}>{subtitle}</span>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default HowProgramWorks;
