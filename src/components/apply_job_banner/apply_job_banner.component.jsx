import React from "react";
import ErrorBoundary from "utils/error_boundary.util";
import Link from "components/link/link.component";

import classnames from "classnames/bind";
import styles from "./apply_job_banner.module.scss";
const css = classnames.bind(styles);

export const ApplyJobBanner = ({
  title,
  title_class_override,
  description,
  description_class_override,
  banner_class_override,
  button_title,
  button_link,
  button_class_override,
  button_on_click,
  disabled,
}) => {
  return (
    <ErrorBoundary>
      <div className={css("banner", banner_class_override)}>
        <div className={css("title2", "banner__title", title_class_override)}>
          <p>{title || ["Ready to get into your dream", <br key="key" />, "finance job?"]}</p>
          {!!description && (
            <p className={css("banner__description", "paragraph", description_class_override)}>{description}</p>
          )}
        </div>
        <Link
          navigateTo={button_link || window.location.origin}
          className={css(
            "reset-link",
            "button",
            "button__size--lg",
            "banner__btn",
            disabled ? "button__disabled" : button_class_override || "button__style--white",
          )}
          disabled={disabled}
          onClick={button_on_click}
        >
          <span>{button_title || "Apply now for free"}</span>
        </Link>
      </div>
    </ErrorBoundary>
  );
};

export default ApplyJobBanner;
