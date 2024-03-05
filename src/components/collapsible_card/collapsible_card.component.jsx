import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./collapsible_card.module.scss";
const css = classnames.bind(styles);

const CollapsibleCard = ({ collapsed, cardTitle, cardTag, children, onClick, monoDark, monoLight }) => {
  return (
    <ErrorBoundary>
      <div
        className={css(
          "collapsibleCard",
          `collapsibleCard--${monoDark ? "monoDark" : monoLight && "monoLight"}`,
          "paragraph",
        )}
      >
        <div className={css("collapsibleCard__header")} onClick={onClick} data-collapsed={collapsed}>
          <div className={css("subtitle--poppins")}>{cardTitle}</div>
          <div className={css("collapsibleCard__header--right")}>
            {cardTag && <p>{cardTag}</p>}
            {children && (
              <div className={css("chevron", { rotate180: !collapsed })} data-collapsed={collapsed}>
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
                  width="32px"
                  height="32px"
                  alt="toggle"
                />
              </div>
            )}
          </div>
        </div>
        <div className={css("collapsibleCard__content")} data-collapsed={collapsed}>
          {children}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CollapsibleCard;
