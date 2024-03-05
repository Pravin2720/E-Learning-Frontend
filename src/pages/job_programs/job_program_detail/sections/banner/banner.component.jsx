import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import InfoGrid from "../info_grid/info_grid.component";

import classnames from "classnames/bind";
import styles from "./banner.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const Banner = ({ role, long_description, tripetto_url, ...rest }) => {
  return (
    <ErrorBoundary>
      <div className={css("banner")}>
        <div className={css("chip", "caption", "textDull")}>Job Program</div>
        <h1 className={css("title2", "banner__title")}>
          <span className={css("textNormal")}>Become a</span>
          <br />
          <span className={css("textGradient")}>{role}</span>
        </h1>
        <span className={css("subtitle", "banner__description", "textDull")}>{long_description}</span>
        <Link
          navigateTo={tripetto_url ?? "/programs"}
          className={css("reset-link", "banner__button", "button", "button__size--lg", "button__style--solid")}
        >
          <span>Apply now for free</span>
        </Link>
      </div>
      <InfoGrid {...rest} />
    </ErrorBoundary>
  );
};

export default Banner;
