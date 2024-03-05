import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./program_timeline.module.scss";
const css = classnames.bind(styles);

const ProgramTimeline = ({ curriculum, curriculum_url, brochure_url }) => {
  return (
    <ErrorBoundary>
      <div className={css("program-timeline")}>
        {curriculum.map(({ title, description }, index) => (
          <div className={css("curriculumTile")} key={index}>
            <span className={css("subtitle", "textBold")}>{title}</span>
            <span className={css("caption", "textDull")}>{description}</span>
          </div>
        ))}
        <div className={css("buttonWrapper")}>
          {curriculum_url && (
            <a
              href={curriculum_url}
              className={css(
                "reset-link",
                "button",
                "button__size--sm",
                "button__style--solid",
                !curriculum_url && "button__disabled",
              )}
            >
              Download Detailed Curriculum
            </a>
          )}
          {brochure_url && (
            <a
              href={brochure_url}
              className={css(
                "reset-link",
                "button",
                "button__size--sm",
                "button__style--outlined",
                !brochure_url && "button__disabled",
              )}
            >
              Download Brochure
            </a>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProgramTimeline;
