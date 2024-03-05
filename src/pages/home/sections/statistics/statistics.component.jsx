import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./statistics.module.scss";
const css = classnames.bind(styles);

const Stat = ({ description, title, icon }) => (
  <ErrorBoundary>
    <div className={css("stat")}>
      <div className={css("stat__icon")}>
        <img src={icon} alt="Icon" width="64px" height="64px" />
      </div>
      <h3 className={css("stat__title", "title3")}>{title}</h3>
      <div className={css("stat__desc")}>{description}</div>
    </div>
  </ErrorBoundary>
);

const Statistics = () => {
  return (
    <ErrorBoundary>
      <div className={css("stats")}>
        <div className={css("stats__left")}>
          <Stat
            title="25,000+"
            description="Learners upskilled"
            icon="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/UserGroup.svg"
          />
          <Stat
            title="200 hrs"
            description="Content repository"
            icon="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Clock.svg"
          />
          <Stat
            title="3000+"
            description="5-star reviews"
            icon="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/StarOutline.svg"
          />
        </div>
        <div className={css("stats__right")}>
          <h3 className={css("title3", "stats__title")}>
            Our content is widely consumed by top institutes of the country.
          </h3>
          <p className={css("paragraph", "stats__description")}>Trusted institute partners:</p>
          <div className={css("hiringPartners")}>
            <div className={css("hiringPartners__item", "imageWrapper")}>
              <img
                className={css("image--landscape")}
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/stats/st_xaviers_college.webp"
                width="64"
                height="64"
                alt="logo"
                loading="lazy"
              />
            </div>
            <div className={css("hiringPartners__item", "imageWrapper")}>
              <img
                className={css("image--landscape")}
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/stats/st_xaviers_college_kolkata.webp"
                width="64"
                height="64"
                alt="logo"
                loading="lazy"
              />
            </div>
            <div className={css("hiringPartners__item", "imageWrapper")}>
              <img
                className={css("image--landscape")}
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/stats/srcc.webp"
                width="64"
                height="64"
                alt="logo"
                loading="lazy"
              />
            </div>
            <div className={css("hiringPartners__item", "imageWrapper")}>
              <img
                className={css("image--landscape")}
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/stats/lbsim.webp"
                width="64"
                height="64"
                alt="logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Statistics;
