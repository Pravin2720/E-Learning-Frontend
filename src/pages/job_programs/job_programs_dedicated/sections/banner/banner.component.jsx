import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./banner.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const Banner = () => {
  return (
    <ErrorBoundary>
      <div className={css("banner")}>
        <div className={css("banner__left")}>
          <div className={css("banner__heading", "title1", "shape__before")}>
            <span>Get into your dream </span>
            <span className={css("textGradient")}>Finance&nbsp;job.</span>
          </div>
          <span className={css("subtitle", "textDull")}></span>

          <React.Suspense fallback={<div className={css("reset-link", "banner__button")}>Loading...</div>}>
            <Link
              navigateTo="/programs"
              className={css("reset-link", "banner__button", "button", "button__size--lg", "button__style--solid")}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("job_programs_list")
                  ?.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
              }}
            >
              <span>View Programs</span>
            </Link>
          </React.Suspense>
        </div>
        <div className={css("banner__right")}>
          <div className={css("imageComboWrapper")}>
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/banner/banner-male-layer-1.svg"
              alt="layer 1"
              width="687px"
              height="892px"
              loading="lazy"
            />
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/banner/banner-male-layer-2.webp"
              alt="layer 2"
              width="687px"
              height="892px"
              // loading="lazy"
            />
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/banner/banner-male-layer-3.svg"
              alt="layer 3"
              width="687px"
              height="892px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Banner;
