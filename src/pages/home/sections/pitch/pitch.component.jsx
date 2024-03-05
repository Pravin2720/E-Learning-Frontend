import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./pitch.module.scss";
const css = classnames.bind(styles);

const Item = ({ description, title, icon }) => (
  <ErrorBoundary>
    <div className={css("item")}>
      <div className={css("item__icon")}>
        <img src={icon} alt="Icon" width="85px" height="85px" />
      </div>
      <h3 className={css("item__title", "subtitle--poppins")}>{title}</h3>
      <div className={css("item__description")}>{description}</div>
    </div>
  </ErrorBoundary>
);

const Pitch = () => {
  return (
    <ErrorBoundary>
      <div className={css("pitch")}>
        <div className={css("pitch__bottom")}>
          <Item
            title="Learn what's needed"
            description="Our curated content helps you become market ready."
            icon="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/BookOpen.svg"
          />
          <Item
            title="Learn from the best"
            description="Everything is taught by experts and executives from top finance firms."
            icon="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ThumbUp.svg"
          />
          <Item
            title="Community access"
            description="Join 15,000+ finance professionals and get regular updates on finance."
            icon="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Globe.svg"
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Pitch;
