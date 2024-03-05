import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./placed_at.module.scss";
const css = classnames.bind(styles);

const Carousel = CustomLazy(import(/* webpackChunkName: "Carousel" */ "components/carousel/carousel.component"));

const PlacedAt = ({ logoList, showDots }) => {
  const settings = {
    showDots: showDots,
    autoPlaySpeed: 2000,
    containerClass: css("gallery"),
    sliderClass: css("gallery__track"),
    itemClass: css("track__item"),
    unitClass: `[class*='${css("gallery__image")}']`,
  };

  return (
    <ErrorBoundary>
      <PlaceHolder height="34rem">
        <Carousel overrides={settings} containerClass={settings.containerClass} unitClass={settings.unitClass}>
          {logoList.map((data, index) => {
            return (
              <div key={index} className={css("gallery__image")}>
                <img
                  srcSet={data.url}
                  alt={data.description}
                  className={css("image")}
                  width="220px"
                  height="220px"
                  loading="lazy"
                />
              </div>
            );
          })}
        </Carousel>
      </PlaceHolder>
    </ErrorBoundary>
  );
};

export default PlacedAt;
