import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./statistics.module.scss";
const css = classnames.bind(styles);

const Stat = ({ hashtag, title, category, value }) => (
  <ErrorBoundary>
    <div className={css("stat")}>
      <div className={css("stat__hashtag", "subtitle--poppins")}>#{hashtag}</div>
      <h3 className={css("stat__title", "subtitle", "textDull")}>{title}</h3>
      <div className={css("stat__value--up", "title4")}>{value}</div>
      <div className={css("stat__category", "title4")}>{category}</div>
    </div>
  </ErrorBoundary>
);

const Statistics = () => {
  return (
    <ErrorBoundary>
      <div className={css("stats")}>
        <div className={css("stats__left")}>
          <h3 className={css("title3", "stats__title")}>
            Arvind Kothari's stellar
            <span className={css("textHighlighted")}> Smallcase performance </span>
            for the past 1 year
          </h3>
        </div>
        <div className={css("stats__right")}>
          <Stat
            hashtag="Top gainer of last year"
            title="Mid and Small Cap focused portfolio"
            category="1 Yr Returns"
            value="132.70%"
          />
          <Stat
            hashtag="Most bought smallcase - Dec '21"
            title="Green Energy"
            category="10 Months Returns"
            value="134.77%"
          />
        </div>
      </div>
      <p style={{ textAlign: "end" }}>Updated as on 04 Jan 2022.</p>
    </ErrorBoundary>
  );
};

export default Statistics;
