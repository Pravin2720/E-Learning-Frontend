import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./reviews.module.scss";
const css = classnames.bind(styles);

const UserReviewCard = CustomLazy(
  import(/* webpackChunkName: "UserReviewCard" */ "components/user_review_card/user_review_card.component"),
);
const Carousel = CustomLazy(import(/* webpackChunkName: "Carousel" */ "components/carousel/carousel.component"));

const Reviews = ({ reviews }) => {
  const settings = {
    showDots: true,
    autoPlaySpeed: 5000,
    containerClass: css("reviews"),
    sliderClass: css("reviews__track"),
    itemClass: css("track__item"),
    unitClass: `[class*='${css("cardStyle")}']`,
    centerMode: false,
    responsive: {
      bigscreen: {
        breakpoint: { max: 10000, min: 901 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 900, min: 0 },
        items: 1,
      },
    },
  };

  return (
    <ErrorBoundary>
      <PlaceHolder height="47rem">
        <Carousel overrides={settings} containerClass={settings.containerClass} unitClass={settings.unitClass}>
          {reviews &&
            reviews.map((data, index) => {
              return (
                <div key={index} className={css("listStyle")}>
                  <PlaceHolder height="39rem">
                    <UserReviewCard {...data} cardStyle={css("cardStyle")} />
                  </PlaceHolder>
                </div>
              );
            })}
        </Carousel>
      </PlaceHolder>
    </ErrorBoundary>
  );
};

export default Reviews;
