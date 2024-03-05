import React from "react";
import MockData from "data";
import { fillTemplate } from "utils";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";

import VerticalLayout from "layouts/vertical.layout";
import Section from "components/section/section.component";
import FAQ from "components/faq/faq.component";

import classnames from "classnames/bind";
import styles from "./faqs.module.scss";
const css = classnames.bind(styles);

const faqs = [...MockData.faqs];
const polyfills = {
  REQUIRED_DEGREE: "CA or MBA",
  ROLE: "Our programs focus on roles that",
  ALSO_ELIGIBLE: "",
};
const new_faqs = faqs.map((faq) => ({
  title: fillTemplate(faq.title, polyfills),
  sub_items: faq.sub_items.map((item) => fillTemplate(item, polyfills)),
}));

const FAQs = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section title="FAQ’s" className={css("faqs-container")} id="faqs" description="">
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <FAQ faqItems={new_faqs} monoDark />
              </React.Suspense>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default FAQs;
