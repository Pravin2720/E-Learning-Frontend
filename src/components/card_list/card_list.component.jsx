import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import StarRating from "components/star_rating/star_rating.component";

import classnames from "classnames/bind";
import styles from "./card_list.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

export const CourseCard = ({
  isBundle,
  isWorkshop,
  pre_launch,
  image_url,
  grid_image_url,
  title,
  short_description,
  videos,
  markup_price,
  offer_price,
  discount,
  itemLink,
  layout,
  ratings,
  best_seller,
  coming_soon,
}) => {
  const ctaButton = (
    <Link
      navigateTo={itemLink}
      className={css(
        "reset-link",
        "button",
        "button__style--solid",
        "button__size--sm",
        "ctaButton",
        "caption",
        "textPoppins",
      )}
    >
      {layout === "list" ? "View details" : "Buy now"}
    </Link>
  );

  const discountPercentage = (
    <div className={css("discountPercentage")}>
      <div className={css("tag", "tag--white", layout === "list" ? "paragraph" : "caption")}>{discount + "% off"}</div>
    </div>
  );

  return (
    <ErrorBoundary>
      <div
        className={css("card", isBundle ? "card--bundle" : "card--course", {
          "card--preLaunch": pre_launch,
          card__hover: !coming_soon,
          card__overlay: coming_soon,
        })}
      >
        {/* logo */}
        <Link navigateTo={itemLink} className={css("reset-link")}>
          <div className={css("card__icon")}>
            <div className={css("imageWrapper", "imageWrapper__centered")}>
              <img
                srcSet={layout === "list" ? image_url : grid_image_url ?? image_url}
                width={layout === "list" ? "400px" : "422px"}
                height={layout === "list" ? "298px" : "260px"}
                className={css({ "image--portrait": image_url })}
                alt="course icon"
                loading="lazy"
              />
            </div>
          </div>
        </Link>
        {layout !== "list" && discount && discountPercentage}

        <div className={css("card__content")}>
          <div className={css("content__row", "details")}>
            <div className={css("details__title")}>
              {/* title */}
              <h4 className={css({ title4: layout === "list", "paragraph--poppins": layout === "grid" })}>{title}</h4>
              <div className={css("details__tags")}>
                {isBundle && <span className={css("tag", "tag--yellow-gold", "caption")}>Bundle</span>}
                {isWorkshop && <span className={css("tag", "tag--red", "caption")}>Live&nbsp;Workshop</span>}
                {best_seller && <span className={css("tag", "caption")}>Best&nbsp;seller</span>}
                {pre_launch && <span className={css("tag", "tag--yellow", "caption")}>Pre&nbsp;launch</span>}
                {coming_soon && <span className={css("tag", "caption")}>Coming&nbsp;soon</span>}
              </div>
            </div>

            {/* description */}
            <div className={css("caption", "details__description")}>{short_description}</div>

            {/* ratings */}
            {ratings && (
              <StarRating
                digit_left
                className={css("details__ratings")}
                value={ratings}
                additional_text={pre_launch && layout === "list" ? "(100 ratings from early users)" : "(100 ratings)"}
              />
            )}
          </div>

          <div className={css("content__row", "bottomBar")}>
            {/* course pricing */}
            <div className={css("price")}>
              <h4 className={css("title4")}>
                {(offer_price ?? markup_price) !== "0" && <span className={css("textDMSans")}>₹ </span>}
                {(offer_price ?? markup_price) === "0" ? "FREE" : offer_price ?? markup_price}
              </h4>
              {offer_price && (
                <p className={css("paragraph", "text__lineThrough")}>
                  <span className={css("textDMSans")}>₹ </span> {markup_price}
                </p>
              )}
              {layout === "list" && discount && discountPercentage}
            </div>

            <div className={css("metadata")}>
              {/* course info */}
              {videos && parseInt(videos) !== 0 && (
                <div className={css("metadata__item")}>
                  <img
                    className={css("image")}
                    src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Play.svg"
                    width="24px"
                    height="24px"
                    alt="No of Videos"
                    loading="lazy"
                  />
                  {videos && parseInt(videos) !== 0 && (
                    <span className={css("videosNum")}>
                      {videos} video{parseInt(videos) > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              )}
            </div>
            {/* cta button */}
            {layout === "list" && ctaButton}
          </div>

          <div className={css("content__row", "hiddenRow")}>
            {/* cta button */}
            {layout !== "list" && (
              <>
                {/* {ctaButton} */}
                <Link
                  navigateTo={itemLink}
                  style={{ marginLeft: "auto", visibility: itemLink ? "visible" : "hidden" }}
                  className={css(
                    "reset-link",
                    "button",
                    "button__style--outlined",
                    "button__size--lean",
                    "caption",
                    "textPoppins",
                    "textBright",
                    "textBold",
                  )}
                >
                  learn more &nbsp;&rarr;
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const CardList = ({ list, layout }) => {
  return (
    <div className={css("cards", layout === "list" && "cards--list")}>
      {list.length > 0 &&
        list.map((data, index) => {
          return <CourseCard key={index} {...data} layout={layout} />;
        })}
    </div>
  );
};

export default CardList;
