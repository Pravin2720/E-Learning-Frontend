import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { callIfDocReady } from "utils";

import classnames from "classnames/bind";
import styles from "./banner.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const Banner = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    var timeout_id = null;
    const animateBanner = () => {
      if (!ref.current) return;
      timeout_id = setTimeout(() => ref.current.classList.add(css("animate-sliding-vertical")), 3000);
    };
    const cleanup_animateBanner = callIfDocReady(animateBanner);
    return () => {
      if (timeout_id) clearTimeout(timeout_id);
      if (typeof cleanup_animateBanner === "function") cleanup_animateBanner();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className={css("banner")}>
        <div className={css("banner__left")}>
          <div className={css("banner__heading", "title1", "shape__before")}>
            <span>Learn </span>
            <div className={css("sliding-vertical", "animate-sliding-vertical")} ref={ref}>
              <span>{"Investing"}</span>
              <span>{"Trading"}</span>
              <span>{"Cryptos"}</span>
              <span>{"Stock\nMarket"}</span>
            </div>
            <span className={css("animated-text-placeholder")}>{"Stock\nMarket"}</span>
          </div>
          <div className={css("subtitle", "textDull")}>
            Upskill with Valuationary to learn the market-relevant skills and take charge of your financial knowledge
            now!
          </div>

          <React.Suspense fallback={<div className={css("reset-link", "banner__button")}>Loading...</div>}>
            <Link
              navigateTo="/programs"
              className={css("reset-link", "banner__button", "button", "button__size--lg", "button__style--solid")}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>Explore Courses</div>
            </Link>
          </React.Suspense>
        </div>
        <div className={css("banner__right")}>
          <div className={css("imageComboWrapper")}>
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/banner/banner-male2-layer-2.webp"
              alt="layer 2"
              width="748px"
              height="890px"
              // loading="lazy"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Banner;
