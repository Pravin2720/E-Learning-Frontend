import React, { useState } from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./accordion.module.scss";
const css = classnames.bind(styles);

const CollapsibleCard = CustomLazy(
  import(/* webpackChunkName: "CollapsibleCard" */ "components/collapsible_card/collapsible_card.component"),
);
const YouTubeEmbed = CustomLazy(
  import(/* webpackChunkName: "YouTubeEmbed" */ "components/youtube_embed/youtube_embed.component"),
);

const AccordionSubItem = ({ sub_item, showListIcons }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className={css("accordion__subItem")}>
      <div className={css("subItem")}>
        {showListIcons && (
          <>
            {sub_item.hasOwnProperty("video_link") && sub_item.video_link.length > 0 ? (
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Play.svg"
                width="24px"
                height="24px"
                alt="toggle"
                className={css("chevron")}
              />
            ) : (
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
                width="16px"
                height="16px"
                alt="toggle"
                className={css("chevron")}
                style={{ transform: "rotate(-90deg)" }}
              />
            )}
          </>
        )}

        <p className={css("subItem__title")}>{typeof sub_item === "object" ? sub_item.title : sub_item}</p>
        <div className={css("subItem__tags")}>
          {sub_item.hasOwnProperty("video_link") && sub_item.video_link.length > 0 && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={css("reset-button", "button", "button__style--stripped")}
              style={{ textDecoration: "underline" }}
            >
              {showPreview ? "Hide" : "Preview"}
            </button>
          )}
        </div>
      </div>
      {sub_item.hasOwnProperty("video_link") && sub_item.video_link.length > 0 && showPreview && (
        <div className={css("youtubeWrapper", "aspect-ratio-box-wrapper", "aspect-ratio-box")}>
          <PlaceHolder cover>
            <YouTubeEmbed src={sub_item.video_link} />
          </PlaceHolder>
        </div>
      )}
    </div>
  );
};

const Accordion = ({
  items,
  numbered_list,
  accessibility,
  first_open,
  full,
  monoDark,
  monoLight,
  list_class_override,
  item_class_override,
}) => {
  const [openCards, setOpenCards] = React.useState([first_open && 0]);
  function isSubListRequired(sub_item) {
    return typeof sub_item === "object" && sub_item.hasOwnProperty("sub_items") && sub_item.sub_items.length > 0;
  }
  function isListRequired(item) {
    return (
      typeof item === "object" &&
      item.hasOwnProperty("sub_items") &&
      item.sub_items.length > 0 &&
      item.sub_items.filter(
        (sub_item) =>
          typeof sub_item === "object" && sub_item.hasOwnProperty("sub_items") && sub_item.sub_items.length > 0,
      ).length === item.sub_items.length
    );
  }
  const expandAll = (expand) => {
    return (e) => {
      const target = e.target.parentElement.parentElement;
      const subTargets = target.querySelectorAll(`div[data-collapsed=${expand}]`);
      Array.from(subTargets).forEach((chevron) => chevron.click());
    };
  };

  return (
    <ErrorBoundary>
      <div className={css(full ? "accordion--full" : "accordion")}>
        <div className={css("accordion__utility")}>
          {accessibility && (
            <>
              <button className={css("reset-button", "accordion__utilityButton")} onClick={expandAll(true)}>
                Expand All
              </button>
              <button className={css("reset-button", "accordion__utilityButton")} onClick={expandAll(false)}>
                Collapse All
              </button>
            </>
          )}
        </div>
        <div className={css("accordion__list", list_class_override)}>
          {items.length > 0 &&
            items.map((item, index) => {
              const title = typeof item === "object" ? item.title : item;
              return (
                <div key={index} className={css("accordion__item", item_class_override)}>
                  <PlaceHolder height="10.2rem">
                    <CollapsibleCard
                      monoDark={monoDark}
                      monoLight={monoLight}
                      collapsed={!openCards.includes(index)}
                      onClick={() => setOpenCards([!openCards.includes(index) && index])}
                      cardTitle={!numbered_list ? title : `${index + 1}. ${title}`}
                    >
                      {isListRequired(item)
                        ? item.hasOwnProperty("sub_items") && (
                            <Accordion
                              items={item.sub_items}
                              numbered_list={item.numbered_list}
                              first_open={first_open}
                            />
                          )
                        : item.hasOwnProperty("sub_items") &&
                          item.sub_items.map((sub_item, index) => {
                            return isSubListRequired(sub_item) ? (
                              sub_item.hasOwnProperty("sub_items") && (
                                <Accordion
                                  key={index}
                                  items={[sub_item]}
                                  numbered_list={false}
                                  first_open={first_open}
                                />
                              )
                            ) : (
                              <AccordionSubItem key={index} sub_item={sub_item} showListIcons={!full} />
                            );
                          })}
                    </CollapsibleCard>
                  </PlaceHolder>
                </div>
              );
            })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Accordion;
