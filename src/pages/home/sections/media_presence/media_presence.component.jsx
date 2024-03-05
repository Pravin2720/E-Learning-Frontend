import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./media_presence.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const featured = {
  primary: [
    {
      alt: "YourStory",
      navigateTo:
        "https://yourstory.com/2021/07/startup-bharat-surat-edtech-hrtech-upskilling-valuationary-finance-jobs/amp",
      icon_url:
        "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/svg/min/yourstory_logo_min.svg",
    },
    // {
    //   alt: "Yahoo Finance",
    //   navigateTo: "https://in.finance.yahoo.com/news/startup-bharat-surat-based-edtech-235500257.html",
    //   icon_url:
    //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/svg/min/yahoofinance_logo_min.svg",
    // },
  ],
  secondary: [
    {
      alt: "Business Standard",
      navigateTo:
        "https://www.business-standard.com/content/press-releases-ani/marwari-catalysts-ventures-unveils-edtech-batch-of-startups-for-its-edtech-accelerator-program-thrive-121041500868_1.html",
      icon_url:
        "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/webp/280/businessstandard_logo.webp 280w",
    },
    // {
    //   alt: "Yahoo News",
    //   navigateTo: "https://in.news.yahoo.com/marwari-catalysts-ventures-unveils-edtech-102304310.html",
    //   icon_url:
    //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/webp/280/yahoonews_logo.webp 280w",
    // },
    {
      alt: "The Week",
      navigateTo: "https://www.theweek.in/wire-updates/business/2021/04/15/pwr21-marwari-catalysts.html",
      icon_url:
        "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/svg/min/theweek_logo_min.svg",
    },
    {
      alt: "ANI News",
      navigateTo:
        "https://www.aninews.in/news/business/business/marwari-catalysts-ventures-unveils-edtech-batch-of-startups-for-its-edtech-accelerator-program-thrive20210415155224/",
      icon_url:
        "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/webp/280/ani_logo_transparent.webp 280w",
    },
    // {
    //   alt: "NewsVoir",
    //   navigateTo:
    //     "https://www.indiainfoline.com/newsvoir?c_article_id=16260&c_author_id=13864&originurl=https%3A%2F%2Fwww.indiainfoline.com%2Fnewsvoir",
    //   icon_url:
    //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/webp/280/newsvoir_logo.webp 280w",
    // },
    {
      alt: "DailyHunt",
      navigateTo:
        "https://m.dailyhunt.in/news/india/english/newsvoir-epaper-newsvoir/marwari+catalysts+ventures+unveils+edtech+batch+of+startups+for+its+edtech+accelerator+program+thrive-newsid-n271256896",
      icon_url:
        "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/company-logos/featured/svg/min/dailyhunt_logo_min.svg",
    },
  ],
};

const Item = ({ navigateTo, icon_url, sizes, width, height, alt, primary }) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Link navigateTo={navigateTo} className={css("reset-link", "media__item")}>
          <img
            srcSet={icon_url}
            sizes={sizes}
            width={width}
            height={height}
            alt={alt}
            className={css(primary ? "media__item--primary" : "media__item--secondary")}
            loading="lazy"
          />
        </Link>
      </React.Suspense>
    </ErrorBoundary>
  );
};

const MediaPresence = () => {
  return (
    <div className={css("media")}>
      <div className={css("media__left")}>
        <h2 className={css("title2")}>Media presence</h2>
      </div>
      <div className={css("media__right")}>
        {featured.primary && (
          <div className={css("media__row", "media__row--even")}>
            {featured.primary.map((item, index) => (
              <Item key={index} primary {...item} width="280px" height="140px" />
            ))}
          </div>
        )}
        {featured.secondary && (
          <div className={css("media__row")}>
            {featured.secondary.map((item, index) => (
              <Item key={index} {...item} width="180px" height="90px" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPresence;
