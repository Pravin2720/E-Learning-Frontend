import React from "react";

export const useMediaQuery = (media_query) => {
  const [isMatch, setIsMatch] = React.useState(false);

  React.useLayoutEffect(() => {
    const mediaQueryHandler = () => {
      const mediaQuery = window.matchMedia(media_query);
      if (isMatch !== mediaQuery.matches) setIsMatch(mediaQuery.matches);
    };
    window.addEventListener("resize", mediaQueryHandler, { passive: true });
    mediaQueryHandler();
    return () => {
      window.removeEventListener("resize", mediaQueryHandler);
    };
  }, [isMatch, media_query]);

  return isMatch;
};

export default useMediaQuery;
