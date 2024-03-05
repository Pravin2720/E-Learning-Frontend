import React from "react";
import MockData from "data/index";
import { fillTemplate } from "utils";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";

import classnames from "classnames/bind";
import styles from "./job_programs.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
const ApplyJobBanner = CustomLazy(
  import(/* webpackChunkName: "ApplyJobBanner" */ "components/apply_job_banner/apply_job_banner.component"),
);
const FAQ = CustomLazy(import(/* webpackChunkName: "FAQ" */ "components/faq/faq.component"));
const Reviews = CustomLazy(import(/* webpackChunkName: "Reviews" */ "components/reviews/reviews.component"));
// const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const ProgramFee = CustomLazy(
  import(/* webpackChunkName: "ProgramFee" */ "../components/program_fee/program_fee.component"),
);
// const Requirements = CustomLazy(
//   import(/* webpackChunkName: "Requirements" */ "../components/requirements/requirements.component"),
// );

const Banner = CustomLazy(import(/* webpackChunkName: "Banner" */ "./sections/banner/banner.component"));
const ListJobPrograms = CustomLazy(
  import(/* webpackChunkName: "ListJobPrograms" */ "./sections/list_job_programs/list_job_programs.component"),
);
const WhatIsJobProgram = CustomLazy(
  import(/* webpackChunkName: "WhatIsJobProgram" */ "./sections/what_is_job_program/what_is_job_program.component"),
);
const HowProgramWorks = CustomLazy(
  import(/* webpackChunkName: "HowProgramWorks" */ "./sections/how_program_works/how_program_works.component"),
);

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

let reviews = [];
for (let review of MockData.reviews) {
  if (review.is_featured) reviews.push(review);
}

const JobPrograms = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section className={css("banner-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Banner />
              </React.Suspense>
            </Section>
            <Section className={css("what-is-job-program-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <WhatIsJobProgram />
              </React.Suspense>
            </Section>
            <Section
              title="How the program works?"
              title_class_override={css("title2", "title")}
              description_class_override={css("description")}
              description="Valuationary will upskill you with requisite practical knowledge so that you become a best fit for finance job role."
              className={css("how-program-works-container")}
            >
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <HowProgramWorks />
              </React.Suspense>
            </Section>
            <Section title="Our job programs" className={css("list-job-programs-container")} id="job_programs_list">
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ListJobPrograms />
              </React.Suspense>
            </Section>
            {/* <Section className={css("user-take-up-programs-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Requirements title="Who can take up this programs?" />
              </React.Suspense>
            </Section> */}
            <Section
              title="Program Fee"
              description={["“We believe in win-win.", <br key="key" />, "So you pay only when you get placed!”"]}
              description_class_override={css("title4", "textBright")}
              className={css("program-fee-container")}
            >
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ProgramFee />
              </React.Suspense>
            </Section>
            <Section
              title="What our candidates have to say"
              title_class_override={css("title2", "title")}
              className={css("reviews-container")}
            >
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Reviews reviews={reviews} />
              </React.Suspense>
              {/* <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Link
                  navigateTo="/courses"
                  className={css("reset-link", "button", "button__style--outlined", "button__size--lg")}
                  style={{ width: "fit-content", margin: "8.8rem auto 0 auto" }}
                >
                  View Testimonials
                </Link>
              </React.Suspense> */}
            </Section>
            <Section className={css("job-apply-banner-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ApplyJobBanner
                  button_on_click={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("job_programs_list")
                      ?.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
                  }}
                />
              </React.Suspense>
            </Section>
            <Section title="FAQ’s" className={css("faq-container")} id="faqs">
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <FAQ faqItems={new_faqs} monoLight />
              </React.Suspense>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default JobPrograms;
