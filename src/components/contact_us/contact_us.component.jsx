import React from "react";
import ErrorBoundary from "utils/error_boundary.util";
import Link from "components/link/link.component";

import { default as css } from "classnames";

const ContactUs = () => {
  return (
    <ErrorBoundary>
      <h2 className={css("title2")}>Got a question?</h2>
      <p className={css("paragraph")}>
        {[
          "We're here to help. Check out our ",
          <Link className={css("reset-link")} navigateTo="/faqs" key="faqs">
            <u>FAQs</u>
          </Link>,
          ", send us an ",
          <a className={css("reset-link")} href="mailto:connect@valuationary.com" key="email">
            <u>email</u>
          </a>,
          " or call us at ",
          <a className={css("reset-link")} href="tel:+918128458215" key="contact">
            <u>(+91) 812-845-8215</u>
          </a>,
        ]}
      </p>
    </ErrorBoundary>
  );
};

export default ContactUs;
