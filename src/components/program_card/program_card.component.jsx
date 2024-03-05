import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./program_card.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const ProgramCard = ({
  role,
  long_description,
  itemLink,
  className,
  tags,
  total_capacity,
  batch_start_date,
  image_url,
  title_class_override,
  showChip,
  showImage,
  showTags,
}) => {
  // const colorList = ["#E8C547", "#84A98C", "#4BC6B9", "#A4DE44"];

  return (
    <ErrorBoundary>
      <Link navigateTo={itemLink} className={css("reset-link", className)}>
        <div className={css("card")}>
          {image_url && showImage && (
            <div className={css("card__icon")}>
              <div className={css("imageWrapper")}>
                <img src={image_url} alt="program" className={css("image--landscape")} />
              </div>
            </div>
          )}
          <div className={css("card__content", showImage ? "padding-normal" : "padding-lg")}>
            {showChip && <div className={css("chip", "caption", "textDullDark")}>Job Program</div>}
            {/* title */}
            <h3 className={css(title_class_override || "title3", "content__title")}>
              Become a <span className={css("textHighlighted")}>{role}</span>
            </h3>
            {/* description */}
            <div className={css("paragraph", "content__description")}>{long_description}</div>
            {/* tags */}
            {tags && showTags && (
              <div className={css("tags", "paragraph")}>
                {tags.map((tag, index) => (
                  <div className={css("tag")} key={index}>
                    <img src={tag.icon} alt="icon" width="24px" height="24px" />
                    <span>{tag.tag}</span>
                  </div>
                ))}
              </div>
            )}
            {/* info */}
            <div className={css("info")}>
              <div>
                <p className={css("caption")}>Next Batch starts</p>
                <p className={css("paragraph--poppins")}>{batch_start_date || "To be released..."}</p>
              </div>
              <div>
                <p className={css("caption")}>Total Batch Size</p>
                <p className={css("paragraph--poppins")}>{total_capacity}</p>
              </div>
            </div>
          </div>
          {/* cta */}
          <button className={css("card__cta", "reset-button", "button", "button__style--solid", "button__size--lg")}>
            View Details
          </button>
        </div>
      </Link>
    </ErrorBoundary>
  );
};

export default ProgramCard;
