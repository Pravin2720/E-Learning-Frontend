import React from "react";
import axios from "utils/axios.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./newsletter.module.scss";
const css = classnames.bind(styles);

const Newsletter = () => {
  function animateText(elem, text) {
    let wordDelay = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === " ") wordDelay += 125 + Math.random() * 125;

      setTimeout(() => {
        elem.value = elem.value + (i - 1 > 0 && text.charAt(i - 1) === " " ? " " + text.charAt(i) : text.charAt(i));
      }, i * 50 + Math.random() * 50 + wordDelay);
    }
  }

  function animateButtonText(elem, message) {
    const prev_value = elem.value;
    elem.value = "";
    elem.setAttribute("disabled", "disabled");
    animateText(elem, message);

    setTimeout(() => {
      elem.value = "";
      animateText(elem, prev_value);
      elem.removeAttribute("disabled");
    }, message.length * 50 + 3000);
  }

  return (
    <ErrorBoundary>
      <form
        id="newsletter-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const email = document.getElementById("newsletter-email");

          const response = await axios.post("/utils/newsletter", {
            email: email.value,
          });
          if (response.status !== 200) {
            alert("failed to subscribe");
            return;
          }

          //
          // ANIMATION
          //

          email.value = "";
          animateButtonText(email, "You have subscribed successfully!!!");
        }}
      >
        <div className={css("newsletter")}>
          <input id="newsletter-email" type="email" placeholder="Email" className={css("newsletter__input")} required />
          <button
            id="newsletter-notification"
            type="submit"
            htmlFor="newsletter-form"
            value="Subscribe"
            className={css("newsletter__subscribe", "button", "button__style--solid", "button__size--sm")}
          >
            <span>Subscribe</span>
          </button>
        </div>
      </form>
    </ErrorBoundary>
  );
};

export default Newsletter;
