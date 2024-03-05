import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./requirements.module.scss";
const css = classnames.bind(styles);

const Interweave = CustomLazy(import(/* webpackChunkName: "Interweave" */ "interweave"));
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const Requirements = ({ title, showButton, audience, requirements, tripetto_url }) => {
  return (
    <ErrorBoundary>
      <div className={css("requirements")}>
        <div className={css("requirements__left", "details")}>
          <h2 className={css("title2", "details__title")}>{title}</h2>
          <div className={css("details__audience", "textDull")}>
            <React.Suspense fallback={<PlaceHolder />}>
              <Interweave content={audience} />
            </React.Suspense>
          </div>
          <div className={css("details__requirements", "textDull")}>
            <span className={css("subtitle", "textBold", "label")}>Requirements :</span>
            <React.Suspense fallback={<PlaceHolder />}>
              <Interweave content={requirements} />
            </React.Suspense>
          </div>
          {showButton ? (
            <Link
              navigateTo={tripetto_url}
              className={css("reset-link", "button", "button__size--lg", "button__style--solid", "details__ctaButton")}
            >
              Apply now for free
            </Link>
          ) : (
            <button className={css("button", "button__size--lg", "button__disabled", "details__ctaButton")}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span>Applications closed.</span>
                <span>New batch coming soon...</span>
              </div>
            </button>
          )}
        </div>
        <div className={css("requirements__right")}>
          <div className={css("imageWrapper")}>
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/job_programs/Requirements.webp"
              className={css("image--landscape")}
              alt="requirements"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Requirements;
