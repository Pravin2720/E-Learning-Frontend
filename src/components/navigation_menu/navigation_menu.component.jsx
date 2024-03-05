import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./navigation_menu.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const NavigationMenu = ({ limit, seeAll, navigateTo, subLinks, disabled, menuClose, align, navLink, ...rest }) => {
  const computedLimit = limit - (seeAll === true ? 1 : 0) || 8;
  const seeAllLink = { label: "See All", navigateTo: navigateTo || "/" };

  var allSubLinks = [];
  if (Array.isArray(subLinks)) {
    allSubLinks = subLinks.slice(0, computedLimit + 1);
    if (seeAll === true) allSubLinks.push(seeAllLink);
  }

  return (
    <ErrorBoundary>
      <div className={css("navMenu")}>
        <Link navLink={navLink} className={css("navLink")} {...{ navigateTo, disabled, ...rest }}>
          {/* <img src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg" width="16px" height="16px" alt="Arrow Down" /> */}
        </Link>
        <div className={css("menuWrapper", align && `align--${align.name}`)}>
          {Array.isArray(allSubLinks) && allSubLinks.length > 0 && (
            <ul className={css("menuList")}>
              {allSubLinks.map((link, index) => {
                return (
                  <li
                    className={css("menuItem", "caption", link.disabled && "disabledLink")}
                    key={index}
                    onClick={(e) => {
                      if (typeof menuClose === "function") menuClose();
                      const anchors = e.target.getElementsByTagName("a");
                      if (anchors.length > 0) anchors[0].click();
                    }}
                  >
                    <Link className={css("navLink")} {...link}>
                      {link.comingSoon && <div className={css("tag", "caption")}>Coming Soon</div>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default NavigationMenu;
