import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./spotify_embed.module.scss";
const css = classnames.bind(styles);

const SpotifyEmbed = ({ src }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.01 };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of Array.from(entries)) {
        if (entry.intersectionRatio) {
          ref.current.setAttribute("src", ref.current.dataset["src"]);
          ref.current.removeAttribute("data-src");
          observer.unobserve(ref.current);
          observer.disconnect();
        }
      }
    }, options);
    observer.observe(ref.current);
  }, []);

  return (
    <ErrorBoundary>
      <div className={css("spotifyEmbed")}>
        <iframe
          ref={ref}
          data-src={src}
          title="Spotify podcast player"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    </ErrorBoundary>
  );
};

export default SpotifyEmbed;
