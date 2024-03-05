import React from "react";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./instructor.module.scss";
const css = classnames.bind(styles);

const Interweave = CustomLazy(import(/* webpackChunkName: "Interweave" */ "interweave"));

const Instructor = ({ name, designation, bio, icon_url }) => {
  return (
    <ErrorBoundary>
      <div className={css("instructor")}>
        <div className={css("instructor__left")}>
          <div className={css("instructor__image")}>
            <div className={css("imageWrapper")}>
              <img
                srcSet={icon_url}
                alt={`Instructor ${name}`}
                className={css("image--landscape")}
                width="470px"
                height="470px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className={css("instructor__right")}>
          <h4 className={css("title4", "name")}>{name}</h4>
          <div className={css("designation", "paragraph--poppins")}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Interweave content={designation} />
            </React.Suspense>
          </div>
          <p className={css("paragraph", "textDull")}>{bio}</p>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Instructor;
