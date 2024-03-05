import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
const css = classnames.bind();

const Accordion = CustomLazy(import(/* webpackChunkName: "Accordion" */ "components/accordion/accordion.component"));

const FAQ = ({ faqItems, monoLight, monoDark }) => {
  return (
    <ErrorBoundary>
      <div className={css("faq")}>
        <Accordion items={faqItems} full monoLight={monoLight} monoDark={monoDark} />
      </div>
    </ErrorBoundary>
  );
};

export default FAQ;
