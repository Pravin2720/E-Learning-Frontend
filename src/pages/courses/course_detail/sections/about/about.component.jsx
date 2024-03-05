import React from "react";

import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./about.module.scss";
const css = classnames.bind(styles);

const About = ({ learnings }) => {
  return learnings ? (
    <ErrorBoundary>
      <div className={css("about")}>
        <div className={css("learnings")}>
          <h4 className={css("title4")}>What you’ll learn</h4>
          <div className={css("learnings__list")}>
            {learnings.map((i, index) => (
              <div key={index} className={css("learnings__step")}>
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Check.svg"
                  alt="check icon"
                  className={css("checkIcon")}
                />
                <p className={css("paragraph", "textDull")}>{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  ) : (
    <></>
  );
};

export default About;
