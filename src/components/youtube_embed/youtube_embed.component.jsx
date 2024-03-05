import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./youtube_embed.module.scss";
const css = classnames.bind(styles);

const YouTubeEmbed = ({ src, aspectratio, width, height }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.01 };
    const observer = new IntersectionObserver((entries) => {
      Array.from(entries).forEach((entry) => {
        if (entry.intersectionRatio) {
          ref.current.setAttribute("src", ref.current.dataset["src"]);
          ref.current.removeAttribute("data-src");
          observer.unobserve(ref.current);
          observer.disconnect();
        }
      });
    }, options);
    observer.observe(ref.current);
  }, []);

  React.useEffect(() => {
    const resizeFunc = () => {
      if (!ref.current) return;
      window.test = ref.current;
      const target = ref.current;
      target.removeAttribute("width");
      target.removeAttribute("height");

      const target_style = getComputedStyle(target);

      target.setAttribute("width", target_style.width);
      target.setAttribute("height", parseFloat(target_style.width) / aspectratio);
    };
    window.addEventListener("resize", resizeFunc, { passive: true });
    resizeFunc();
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, [aspectratio]);

  return (
    <ErrorBoundary>
      <div className={css(aspectratio === 1 ? "aspect-ratio-box-square" : "aspect-ratio-box")}>
        <iframe
          ref={ref}
          className={css("youtubeEmbed")}
          data-src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ aspectRatio: `calc(${aspectratio})/1` }}
          width={width}
          height={height}
        />
      </div>
    </ErrorBoundary>
  );
};

YouTubeEmbed.defaultProps = {
  aspectratio: 16 / 9,
};

export default YouTubeEmbed;
