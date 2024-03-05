import React from "react";
import { useLocation } from "react-router-dom";

import ErrorBoundary from "utils/error_boundary.util";
import useMediaQuery from "utils/media_query.util";

import classnames from "classnames/bind";
import styles from "./scroll_top.module.scss";
const css = classnames.bind(styles);

const HashLocate = () => {
  const { hash } = useLocation();
  const preferReducedMotion = useMediaQuery("only screen and (prefers-reduced-motion: no-preference)");

  React.useEffect(() => {
    var timeoutID = setTimeout(() => {
      const target = document.getElementById(hash.slice(1));
      if (!target) {
        const scrollBody = document.getElementById("scrollBody");
        scrollBody.scrollTo({ top: 0, behavior: preferReducedMotion ? "smooth" : "auto" });
      }

      target?.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: preferReducedMotion ? "smooth" : "auto",
      });
    }, 250);

    return () => {
      if (timeoutID) clearTimeout(timeoutID);
    };
  }, [hash, preferReducedMotion]);

  return <></>;
};

const ScrollReset = () => {
  const { pathname } = useLocation();
  const preferReducedMotion = useMediaQuery("only screen and (prefers-reduced-motion: no-preference)");

  React.useEffect(() => {
    const scrollBody = document.getElementById("scrollBody");
    scrollBody.scrollTo({ top: 0, behavior: preferReducedMotion ? "smooth" : "auto" });
  }, [preferReducedMotion, pathname]);

  return <></>;
};

// const ScrollRestore = () => {
//   const { pathname } = useLocation();
//   const preferReducedMotion = useMediaQuery("only screen and (prefers-reduced-motion: no-preference)");

//   React.useEffect(() => {
//     var timeoutID = setTimeout(() => {
//       const scrollBody = document.getElementById("scrollBody");
//       console.log("restoring scroll", sessionStorage.getItem(`pageYOffset--${pathname}`) || 0, scrollBody.scrollTop);
//       scrollBody.scrollTo({
//         top: parseInt(sessionStorage.getItem(`pageYOffset--${pathname}`)) || 0,
//         behavior: preferReducedMotion ? "smooth" : "auto",
//       });
//     }, 500);

//     return () => {
//       if (timeoutID) clearTimeout(timeoutID);
//       console.log("last scroll", sessionStorage.getItem(`pageYOffset--${pathname}`));
//     };
//   }, [preferReducedMotion, pathname]);

//   React.useEffect(() => {
//     var intervalID = setInterval(() => {
//       sessionStorage.setItem(`pageYOffset--${pathname}`, document.getElementById("scrollBody")?.scrollTop);
//     }, 750);

//     return () => {
//       if (intervalID) clearInterval(intervalID);
//     };
//   }, [pathname]);

//   return <></>;
// };

const ScrollTop = () => {
  const preferReducedMotion = useMediaQuery("only screen and (prefers-reduced-motion: no-preference)");

  React.useEffect(() => {
    const scrollTopBtn = document.getElementById("scrollTop");
    const scrollBody = document.getElementById("scrollBody");
    const scrollTopHandler = () => {
      if (scrollBody.scrollTop > 0) {
        scrollTopBtn.classList.remove(css("scrollTop--hidden"));
      } else {
        scrollTopBtn.classList.add(css("scrollTop--hidden"));
      }
    };

    scrollBody.addEventListener("scroll", scrollTopHandler, { passive: true });
    scrollTopHandler();
    return () => {
      scrollBody.removeEventListener("scroll", scrollTopHandler);
    };
  }, []);

  return (
    <ErrorBoundary>
      <HashLocate />
      <ScrollReset />
      <div
        id="scrollTop"
        className={css("scrollTop", "scrollTop--hidden")}
        onClick={(e) => {
          e.preventDefault();
          const scrollBody = document.getElementById("scrollBody");
          scrollBody.scrollTo({
            top: 0,
            behavior: preferReducedMotion ? "smooth" : "auto",
          });
        }}
        aria-label="Scroll to Top"
      >
        <div id="arrowUp" className={css("arrowUp")}></div>
      </div>
    </ErrorBoundary>
  );
};

export default ScrollTop;
