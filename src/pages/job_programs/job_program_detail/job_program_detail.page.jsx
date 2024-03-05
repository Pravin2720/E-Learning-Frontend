import React from "react";
import { useHistory, useParams } from "react-router-dom";
import MockData from "data/index";

import { fillTemplate } from "utils";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";
import { overviewSteps } from "utils/program_overview.util";

import classnames from "classnames/bind";
import styles from "./job_program_detail.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
const ApplyJobBanner = CustomLazy(
  import(/* webpackChunkName: "ApplyJobBanner" */ "components/apply_job_banner/apply_job_banner.component"),
);
const PlacedAt = CustomLazy(import(/* webpackChunkName: "PlacedAt" */ "components/placed_at/placed_at.component"));
const FAQ = CustomLazy(import(/* webpackChunkName: "FAQ" */ "components/faq/faq.component"));
const Reviews = CustomLazy(import(/* webpackChunkName: "Reviews" */ "components/reviews/reviews.component"));
// const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const ProgramFee = CustomLazy(
  import(/* webpackChunkName: "ProgramFee" */ "../components/program_fee/program_fee.component"),
);
const Requirements = CustomLazy(
  import(/* webpackChunkName: "Requirements" */ "../components/requirements/requirements.component"),
);

const Banner = CustomLazy(import(/* webpackChunkName: "Banner" */ "./sections/banner/banner.component"));
// const InfoGrid = CustomLazy(import(/* webpackChunkName: "InfoGrid" */ "./sections/info_grid/info_grid.component"));
const RoleInfo = CustomLazy(import(/* webpackChunkName: "RoleInfo" */ "./sections/role_info/role_info.component"));
const ProgramOverview = CustomLazy(
  import(/* webpackChunkName: "ProgramOverview" */ "./sections/program_overview/program_overview.component"),
);
const ProgramTimeline = CustomLazy(
  import(/* webpackChunkName: "ProgramTimeline" */ "./sections/program_timeline/program_timeline.component"),
);
const Outcome = CustomLazy(import(/* webpackChunkName: "Outcome" */ "./sections/outcome/outcome.component"));
const Instructor = CustomLazy(
  import(/* webpackChunkName: "Instructor" */ "./sections/instructor/instructor.component"),
);

let faqs = [...MockData.faqs];
let reviews = [];
for (let review of MockData.reviews) {
  if (review.is_featured) reviews.push(review);
}

const JobProgramDetail = () => {
  const { id: itemID } = useParams();
  const history = useHistory();
  const details = React.useMemo(() => MockData.programs[itemID], [itemID]);

  const new_faqs = React.useMemo(() => {
    if (!MockData.programs.hasOwnProperty(itemID)) return {};
    const { role } = MockData.programs[itemID];
    if (!role) return {};

    let polyfills = {
      REQUIRED_DEGREE: "CA or MBA",
      ROLE: itemID ? role + "s" : "Our programs focus on roles that",
      ALSO_ELIGIBLE: "",
    };

    if (itemID === "hedge-fund-accountant") {
      polyfills = {
        ...polyfills,
        REQUIRED_DEGREE: "CA / CMA / M.Com / MBA (with accounting background)",
        ALSO_ELIGIBLE: "CA drop-outs with a pedigree of accounting are eligible.",
      };
    }

    const new_faqs = faqs.map((faq) => ({
      title: fillTemplate(faq.title, polyfills),
      sub_items: faq.sub_items.map((item) => fillTemplate(item, polyfills)),
    }));
    return new_faqs;
  }, [itemID]);

  if (!details) {
    history.replace("/404");
    return <></>;
  }

  const {
    curriculum,
    audience,
    requirements,
    role,
    steps,
    role_information,
    outcome,
    instructors,
    bg_image_url,
    ...programSummary
  } = details;

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section className={css("banner-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Banner role={role} {...programSummary} />

                {bg_image_url && (
                  <div className={css("bannerBG")}>
                    <img
                      srcSet={bg_image_url}
                      sizes="100vw"
                      alt="banner background"
                      className={css("bannerBG__image")}
                    />
                    <div className={css("fade", "fade--h")}></div>
                    <div className={css("fade", "fade--v")}></div>
                  </div>
                )}

                <div className={css("glow", "glow--red", "glow--1")} />
              </React.Suspense>
            </Section>
            {/* <Section className={css("infoGrid-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <InfoGrid {...programSummary} />
              </React.Suspense>
            </Section> */}
            {role_information && (
              <Section className={css("roleInfo-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <RoleInfo role={role} content={role_information} />
                </React.Suspense>
              </Section>
            )}
            <Section title="Program Overview" className={css("program-overview-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ProgramOverview overviewSteps={overviewSteps(programSummary)} />
              </React.Suspense>
            </Section>
            {Array.isArray(outcome) && outcome.length > 0 && (
              <Section className={css("outcome-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Outcome outcome={outcome} />
                </React.Suspense>
              </Section>
            )}
            {Array.isArray(curriculum) && curriculum.length > 0 && (
              <Section title="Program Timeline" className={css("program-timeline-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <ProgramTimeline curriculum={curriculum} {...programSummary} />
                </React.Suspense>
              </Section>
            )}
            {audience && requirements && (
              <Section className={css("user-requirements-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Requirements
                    title={"Who is this program for ?"}
                    audience={audience}
                    requirements={requirements}
                    tripetto_url={programSummary.tripetto_url}
                    showButton
                  />
                </React.Suspense>
              </Section>
            )}
            {Array.isArray(MockData.gallery_logos) && MockData.gallery_logos.length > 0 && (
              <Section title="Our canditates work at" className={css("gallery-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <PlacedAt logoList={MockData.gallery_logos} />
                </React.Suspense>
              </Section>
            )}
            {Array.isArray(instructors) && instructors.length > 0 && instructors.filter((v) => !!v.bio).length > 0 && (
              <Section title="Instructor for the course" className={css("instructor-container")}>
                {instructors.map((instructor, index) => {
                  return (
                    <React.Suspense key={index} fallback={<GlobalLoaderTrigger />}>
                      {instructor.bio && <Instructor {...instructor} />}
                    </React.Suspense>
                  );
                })}
              </Section>
            )}
            {Array.isArray(reviews) && reviews.length > 0 && (
              <Section title="What our candidates have to say" className={css("reviews-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Reviews reviews={reviews} />
                </React.Suspense>
                {/* <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Link
                    navigateTo="/programs"
                    className={css("reset-link", "button", "button__style--stripped", "button__size--lg")}
                    style={{ textDecoration: "underline", margin: "7rem auto" }}
                  >
                    View Testimonials
                  </Link>
                </React.Suspense> */}
              </Section>
            )}
            <Section
              title="Program Fee"
              description="“We believe in win-win. So you pay only when you get placed!”"
              className={css("program-fee-container")}
            >
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ProgramFee />
              </React.Suspense>
            </Section>
            <Section className={css("job-apply-banner-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ApplyJobBanner
                  title={["Ready to become a ", role, <br key="key" />, " at your dream company?"]}
                  button_link={programSummary.tripetto_url}
                />
              </React.Suspense>
            </Section>
            <Section title="FAQ’s" className={css("faq-container")}>
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

export default JobProgramDetail;
