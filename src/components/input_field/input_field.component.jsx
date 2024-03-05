import React from "react";
import { useField, splitFormProps } from "react-form";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./input_field.module.scss";
const css = classnames.bind(styles);

const InputField = React.forwardRef(
  (
    {
      id,
      className,
      containerClassName,
      buttonClassName,
      iconSrc,
      iconAlt,
      label,
      button,
      buttonDisabled,
      buttonOnClick,
      ...props
    },
    ref,
  ) => {
    // Let's use splitFormProps to get form-specific props
    const [field, fieldOptions, rest] = splitFormProps(props);

    // Use the useField hook with a field and field options to access field state
    const {
      meta: { error, isTouched, isValidating, message },
      getInputProps,
    } = useField(field, fieldOptions);

    // use getInputProps to filter props applicable for input element
    const inputProps = getInputProps({ ref, id, ...rest });

    // Build the field
    return (
      <ErrorBoundary>
        <div className={css("fieldContainer", containerClassName)}>
          {iconSrc && <img src={iconSrc} alt={iconAlt || "icon"} className={css("icon")} width="24px" height="24px" />}
          <input
            {...inputProps}
            className={css("fieldInput", className, {
              success: isTouched && !error,
              error: !!error,
              fieldInputWithBtn: !!button,
              fieldInputWithLabel: !!label,
            })}
          />
          {label && (
            <label
              htmlFor={id}
              className={css(inputProps.type === "checkbox" ? "caption" : "caption--small", "fieldLabel")}
            >
              {label}
            </label>
          )}
          {button && (
            <button
              className={css(
                "paragraph",
                "reset-button",
                "button",
                "fieldButton",
                buttonClassName,
                buttonDisabled && "button__disabled",
              )}
              onClick={buttonOnClick}
              disabled={buttonDisabled}
            >
              {button}
            </button>
          )}
          <span className={css("caption", "validationResult")}>
            {isValidating ? (
              <em>Validating...</em>
            ) : isTouched && error ? (
              <strong>{error}</strong>
            ) : message ? (
              <small>{message}</small>
            ) : null}
          </span>
        </div>
      </ErrorBoundary>
    );
  },
);

export default InputField;
