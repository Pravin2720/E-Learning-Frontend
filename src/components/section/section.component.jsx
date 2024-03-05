import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./section.module.scss";
const css = classnames.bind(styles);

const Section = ({
  id,
  className,
  title,
  title_class_override,
  description,
  description_class_override,
  bleed,
  children,
}) => {
  return (
    <ErrorBoundary>
      <section id={id} className={css("section", className)}>
        <div className={css(!bleed && "content-max-width-alignment")}>
          {!!title && (
            <>
              <h2 className={css("section__title", title_class_override || "title2")}>{title}</h2>
              <p className={css("section__description", description_class_override || "paragraph")}>
                {description ?? "\u00A0"}
              </p>
            </>
          )}
          {children && <ErrorBoundary>{children}</ErrorBoundary>}
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Section;
