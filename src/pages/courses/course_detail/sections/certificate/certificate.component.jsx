import React from "react";

import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./certificate.module.scss";
const css = classnames.bind(styles);

const Certificate = ({ src }) => {
  return (
    <ErrorBoundary>
      <div className={css("certificate")}>
        <div className={css("benefits")}>
          <div className={css("benefits__item")}>
            <div className={css("icon")}>
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ShieldCheck.svg"
                alt="ShieldCheck"
                loading="lazy"
              />
            </div>
            <div>
              <span className={css("subtitle")}>Official and Verified</span>
              <p className={css("description", "textDull")}></p>
            </div>
          </div>
          <div className={css("benefits__item")}>
            <div className={css("icon")}>
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Share.svg"
                alt="Share"
                loading="lazy"
              />
            </div>
            <div>
              <span className={css("subtitle")}>Easily Shareable</span>
              <p className={css("description", "textDull")}></p>
            </div>
          </div>
          <div className={css("benefits__item")}>
            <div className={css("icon")}>
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/BadgeCheck.svg"
                alt="BadgeCheck"
                loading="lazy"
              />
            </div>
            <div>
              <span className={css("subtitle")}>Enhances Credibility</span>
              <p className={css("description", "textDull")}></p>
            </div>
          </div>
        </div>
        <div className={css("certificate__image")}>
          <div className={css("imageWrapper")}>
            <img
              src={src}
              alt="Certificate"
              loading="lazy"
              width="741px"
              height="573px"
              className={css("image--landscape")}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Certificate;
