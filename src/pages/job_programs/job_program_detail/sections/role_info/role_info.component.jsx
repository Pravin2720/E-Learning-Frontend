import React from "react";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./role_info.module.scss";
const css = classnames.bind(styles);

const Interweave = CustomLazy(import(/* webpackChunkName: "Interweave" */ "interweave"));

const RoleInfo = ({ role, content }) => {
  return (
    <ErrorBoundary>
      <div className={css("userRoleInfo")}>
        <div className={css("userRoleInfo__left")}>
          <div className={css("imageWrapper")}>
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/job_programs/UserRoleInfo.webp"
              className={css("image--landscape")}
              alt="requirements"
              width="694px"
              height="691px"
              loading="lazy"
            />
          </div>
        </div>
        <div className={css("userRoleInfo__right")}>
          <h2 className={css("title2", "details__title")}>
            <span>Who is a </span>
            <span className={css("textHighlighted")}>{role}</span>
          </h2>
          <div className={css("textDull", "details__description")}>
            <Interweave content={content} />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default RoleInfo;
