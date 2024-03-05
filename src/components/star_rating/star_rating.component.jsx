import classnames from "classnames/bind";
import styles from "./star_rating.module.scss";
const css = classnames.bind(styles);

//
// ─── STAR ───────────────────────────────────────────────────────────────────────
//

const IconStar = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 22 22"
      fill="currentColor"
      className={className}
    >
      <path d="M9.049 1.26c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118L1.077 8.434c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69L9.05 1.26z" />
    </svg>
  );
};

// ────────────────────────────────────────────────────────────────────────────────

const StarRating = ({ value, max = 5, digit_left, additional_text, star_class_override, text_class_override }) => {
  /* Calculate how much of the stars should be "filled" */
  const percentage = Math.round((value / max) * 100);

  return (
    <div className={css("starRatings")}>
      {digit_left && <span className={css("starRatings__text--left", "textPoppins")}>{value}</span>}
      <div className={css("starRatings__container")}>
        {/* Create an array based on the max rating, render a star for each */}
        {Array.from(Array(max).keys()).map((_, i) => (
          <IconStar key={i} className={css("starRatings__star", star_class_override)} />
        ))}
        {/* Render a div overlayed on top of the stars that should not be not filled */}
        <div className={css("starRatings__overlay")} style={{ width: `${100 - percentage}%` }} />
      </div>
      {!digit_left && (
        <div className={css("starRatings__text", text_class_override ?? "caption")}>
          <span>
            {value} out of {max}
          </span>
        </div>
      )}
      {additional_text && (
        <div className={css("starRatings__text", text_class_override ?? "caption")}>
          <span> {additional_text} </span>
        </div>
      )}
    </div>
  );
};

export default StarRating;
