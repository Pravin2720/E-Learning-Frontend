import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./user_review_card.module.scss";
const css = classnames.bind(styles);

const UserReviewCard = ({ name, designation, image_url, review_text, cardStyle }) => {
  return (
    <ErrorBoundary>
      <div className={css(cardStyle, "reviewCard")}>
        <div className={css("reviewCard__profile")}>
          {image_url ? (
            <img
              className={css("profile__image")}
              srcSet={image_url}
              height="60px"
              width="60px"
              alt="profile"
              loading="lazy"
            />
          ) : (
            <div className={css("profile__image", "emptyImage")}></div>
          )}
          <div className={css("profile__details")}>
            <div className={css("profile__name", "subtitle--poppins")}>{name}</div>
            <p className={css("profile__designation", "paragraph")}>{designation}</p>
          </div>
        </div>
        <div className={css("reviewCard__text")}>" {review_text} "</div>
      </div>
    </ErrorBoundary>
  );
};

export default UserReviewCard;
