import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./outcome.module.scss";
const css = classnames.bind(styles);

const VideoInterface = CustomLazy(
  import(/* webpackChunkName: "VideoInterface" */ "components/video_interface/video_interface.component"),
);

const Outcome = ({ outcome }) => {
  return (
    <ErrorBoundary>
      <div className={css("outcome")}>
        <div className={css("outcome__top")}>
          <div className={css("outcome__topLeft")}>
            <h2 className={css("title2", "header__title")}>What you’ll be learning</h2>
            <p className={css("paragraph", "textDull", "header__description")}></p>
          </div>
          <div className={css("outcome__topRight")}>
            <div className={css("video", "aspect-ratio-box-wrapper")}>
              <React.Suspense fallback={<PlaceHolder />}>
                <VideoInterface
                  id={`${window.location.pathname.replaceAll("/", "_")}_video`}
                  poster="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/poster/webp/valuationary_poster_853x480.webp"
                  aspectratio={16 / 9}
                  width="420px"
                  height="294px"
                  sources={[
                    {
                      src: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/why_valutionary_480_very_fast.m4v",
                      type: "video/mp4",
                    },
                    {
                      src: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/why_valutionary_480_very_fast.webm",
                      type: "video/mp4",
                    },
                  ]}
                ></VideoInterface>
              </React.Suspense>
            </div>
          </div>
        </div>
        <ul className={css("outcome__bottom")}>
          {Array.isArray(outcome) &&
            outcome.length > 0 &&
            outcome.map((i, index) => (
              <li key={index} className={css("outcome-step")}>
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Check.svg"
                  alt="chek icon"
                  className={css("checkIcon")}
                />
                <p className={css("paragraph")}>{i}</p>
              </li>
            ))}
        </ul>
      </div>
    </ErrorBoundary>
  );
};

export default Outcome;
