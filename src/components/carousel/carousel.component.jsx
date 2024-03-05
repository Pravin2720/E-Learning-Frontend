import React from "react";
import MultiCarousel from "react-multi-carousel";
import ErrorBoundary from "utils/error_boundary.util";
import useMediaQuery from "utils/media_query.util";
import "./carousel.scss";

const Carousel = ({ overrides, containerClass, unitClass, gutterWidth, children }) => {
  const [canFitSlides, setCanFitSlides] = React.useState(1);
  const isBigScreen = useMediaQuery("(min-width: 56.3125em)");
  const settings = {
    arrows: true,
    autoPlay: true,
    centerMode: isBigScreen,
    draggable: true,
    focusOnSelect: true,
    infinite: true,
    keyBoardControl: true,
    swipeable: true,
    showDots: false,
    customTransition: "all 0.5s 0.25s ease-in-out",
    renderButtonGroupOutside: true,
    responsive: {
      default: {
        breakpoint: { max: 10000, min: 0 },
        items: canFitSlides,
        slidesToSlide: 1, // optional, default to 1.
      },
    },
    ...overrides,
  };

  const resizeFunc = React.useCallback(() => {
    if (!!overrides.responsive && Object.keys(overrides.responsive).length === 0) return;

    const target = document.querySelector(`[class*="${containerClass}"]`);
    if (!target) return;
    const unit_elements = target.querySelectorAll(`li ${unitClass}`);
    if (!unit_elements || unit_elements.length < 2) return;

    const doc_style = getComputedStyle(document.documentElement);
    const gutter_width = (gutterWidth || 4) * parseFloat(doc_style.fontSize);
    const pos1 = unit_elements[0].getBoundingClientRect();
    const pos2 = unit_elements[1].getBoundingClientRect();

    const target_style = getComputedStyle(target);
    const target_padding = parseFloat(target_style.paddingLeft) + parseFloat(target_style.paddingRight);

    const numerator = target.offsetWidth - target_padding;
    const denominator = pos1.width + gutter_width;
    const result =
      parseInt(numerator / denominator) -
      (pos1.x + pos1.width + gutter_width > pos2.x ? 2 : 1) +
      (settings.centerMode ? 0 : 1);
    const final_result = result > 0 ? result : 1;

    if (canFitSlides !== final_result) setCanFitSlides(final_result);
  }, [containerClass, unitClass, gutterWidth, canFitSlides, settings.centerMode, overrides.responsive]);

  React.useEffect(() => {
    const target = document.querySelector(`[class*="${containerClass}"]`);
    if (!target) return;

    var observer = new MutationObserver(resizeFunc);
    observer.observe(target, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [resizeFunc, containerClass]);

  React.useEffect(() => {
    window.addEventListener("resize", resizeFunc, { passive: true });
    resizeFunc();
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, [resizeFunc]);

  return (
    <ErrorBoundary>
      <MultiCarousel {...settings}>{children}</MultiCarousel>
    </ErrorBoundary>
  );
};

export default Carousel;
