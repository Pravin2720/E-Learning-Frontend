import React from "react";
import { Interweave } from "interweave";

import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./instructors.module.scss";
const css = classnames.bind(styles);

const Instructor = ({ name, designation, description, icon_url, show_description }) => {
  return (
    <div className={css("instructor", show_description && "instructor--detailed")}>
      <div className={css(show_description ? "imageWrapper--centered" : "imageWrapper")}>
        <img srcSet={icon_url} alt="instructor" className={css("image--landscape", "instructor__image")} />
      </div>

      <div className={css("instructor__description")}>
        {name && <h4 className={css(show_description ? "title4" : "subtitle--poppins")}>{name}</h4>}
        {designation && (
          <div className={css(show_description ? "paragraph--poppins" : "caption")} style={{ marginTop: "1.2rem" }}>
            <Interweave content={designation} />
          </div>
        )}
        {description && (
          <div className={css("paragraph", "textDull")} style={{ marginTop: "2.8rem" }}>
            <Interweave content={description} />
          </div>
        )}
      </div>
    </div>
  );
};

const Instructors = ({ instructors }) => {
  return (
    <ErrorBoundary>
      <div className={css("instructors", { "instructors--grid": instructors.length !== 1 })}>
        {instructors.length !== 1 ? (
          instructors.map((data, index) => <Instructor {...data} key={index} />)
        ) : (
          <Instructor {...instructors[0]} show_description />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Instructors;
