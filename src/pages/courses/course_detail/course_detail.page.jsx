import React from "react";
import MockData from "data/index";
import { Interweave } from "interweave";
import { useHistory, useParams } from "react-router-dom";

// import { fillTemplate } from "utils";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import useMediaQuery from "utils/media_query.util";
import { GlobalLoaderTrigger } from "utils/loader.util";
import { SORT_TYPE } from "utils/sort.util";

import classnames from "classnames/bind";
import styles from "./course_detail.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));
const ApplyJobBanner = CustomLazy(
  import(/* webpackChunkName: "ApplyJobBanner" */ "components/apply_job_banner/apply_job_banner.component"),
);
const CardList = CustomLazy(import(/* webpackChunkName: "CardList" */ "components/card_list/card_list.component"));
const Reviews = CustomLazy(import(/* webpackChunkName: "Reviews" */ "components/reviews/reviews.component"));
// const FAQ = CustomLazy(import(/* webpackChunkName: "FAQ" */ "components/faq/faq.component"));
const ContactUs = CustomLazy(import(/* webpackChunkName: "ContactUs" */ "components/contact_us/contact_us.component"));

const About = CustomLazy(import(/* webpackChunkName: "About" */ "./sections/about/about.component"));
const Banner = CustomLazy(import(/* webpackChunkName: "Banner" */ "./sections/banner/banner.component"));
const Statistics = CustomLazy(
  import(/* webpackChunkName: "Statistics" */ "./sections/statistics/statistics.component"),
);
const Certificate = CustomLazy(
  import(/* webpackChunkName: "Certificate" */ "./sections/certificate/certificate.component"),
);
const Content = CustomLazy(import(/* webpackChunkName: "Content" */ "./sections/content/content.component"));
const Instructors = CustomLazy(
  import(/* webpackChunkName: "Instructors" */ "./sections/instructors/instructors.component"),
);
const Sticky = CustomLazy(import(/* webpackChunkName: "Sticky" */ "./sections/sticky/sticky.component"));
const Summary = CustomLazy(import(/* webpackChunkName: "Summary" */ "./sections/summary/summary.component"));
const CoursePrice = CustomLazy(
  import(/* webpackChunkName: "CoursePrice" */ "./sections/course_price/course_price.component"),
);

// const faqs = [...MockData.faqs];
// const polyfills = {
//   REQUIRED_DEGREE: "CA or MBA",
//   ROLE: "Our programs focus on roles that",
//   ALSO_ELIGIBLE: "",
// };
// const new_faqs = faqs.map((faq) => ({
//   title: fillTemplate(faq.title, polyfills),
//   sub_items: faq.sub_items.map((item) => fillTemplate(item, polyfills)),
// }));

const valid_underscore_urls = import.meta.env.VITE__ALLOWED_ALTERNATE_COURSE_URLS;

const CourseDetail = () => {
  const preferReducedMotion = useMediaQuery("only screen and (prefers-reduced-motion: no-preference)");
  const history = useHistory();
  const isBundle = history.location.pathname.startsWith("/bundle");
  const { id: ogItemID } = useParams();
  const validID = valid_underscore_urls.includes(ogItemID);
  const altItemID = ogItemID?.replaceAll("_", "-");
  const itemID = validID ? altItemID : ogItemID;
  const details = React.useMemo(
    () => (isBundle ? MockData.bundles[itemID] : MockData.courses[itemID]),
    [isBundle, itemID],
  );

  if (!details) {
    history.replace("/404");
    return <></>;
  }

  const { chapters, audience, requirements, instructors, ...courseSummary } = details;
  const { refund_policy, certificate_url, bg_image_url, summary, workshop, learnings } = details;
  const isCFA = courseSummary.categories.find((v) => v.startsWith("cfa"));
  const recommended_courses = MockData.featured_courses
    .filter((v) => v.slug !== itemID)
    .sort(SORT_TYPE.featured)
    .slice(0, 6);

  let reviews = [];
  for (let review of MockData.reviews) {
    if (review.is_featured) reviews.push(review);
  }

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section className={css("banner-container")}>
              <Banner {...courseSummary} entity={isBundle ? "bundle" : "course"} />

              {bg_image_url && (
                <div className={css("bannerBG")}>
                  <img srcSet={bg_image_url} sizes="100vw" alt="banner background" className={css("bannerBG__image")} />
                  {isCFA && <div className={css("fade", "fade--full")}></div>}
                  <div className={css("fade", "fade--h")}></div>
                  <div className={css("fade", "fade--v")}></div>
                  {itemID === "art-of-picking-multibagger-stocks" && (
                    <div className={css("bannerBG__intro")}>
                      <h4 className={css("title4")}>Arvind Kothari</h4>
                      <span className={css("paragraph--poppins", "textDullDark", "textNormal")}>
                        Founder of Niveshaay Investments
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className={css("glow", "glow--red", "glow--1")} />
              {/* {isCFA && <div className={css("glow", "glow--blue", "glow--2")} />} */}
              {itemID !== "art-of-picking-multibagger-stocks" && (
                <div className={css("glow", "glow--blue", "glow--3")} />
              )}
            </Section>
            {itemID === "art-of-picking-multibagger-stocks" && (
              <Section className={css("statistics-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Statistics />
                </React.Suspense>
              </Section>
            )}
            <Section className={css("sticky-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Sticky
                  sticky={
                    <>
                      <Summary summary={summary} entity={workshop ? "combo" : isBundle ? "bundle" : "course"} />
                      <CoursePrice {...courseSummary} entity={isBundle ? "bundle" : "course"} />
                    </>
                  }
                >
                  {Array.isArray(learnings) && learnings.length > 0 && (
                    <Section
                      className={css("about-container")}
                      title={`About this ${isBundle ? "bundle" : "course"}`}
                      title_class_override={css("title", "title2")}
                      description={courseSummary.long_description}
                      description_class_override={css("description", "paragraph")}
                    >
                      <React.Suspense fallback={<GlobalLoaderTrigger />}>
                        <About learnings={learnings} />
                      </React.Suspense>
                    </Section>
                  )}
                  {Array.isArray(instructors) && instructors.length > 0 && (
                    <Section
                      className={css("instructors-container")}
                      title={`Instructor${instructors.length > 1 ? "s" : ""} for this ${
                        isBundle ? "bundle" : "course"
                      }`}
                      title_class_override={css("title", "title2")}
                      description=""
                      description_class_override={css("description", "paragraph")}
                    >
                      <React.Suspense fallback={<GlobalLoaderTrigger />}>
                        <Instructors instructors={instructors} />
                      </React.Suspense>
                    </Section>
                  )}
                  {Array.isArray(chapters) && chapters.length > 0 && (
                    <Section
                      className={css("content-container")}
                      title={`${isBundle ? "Bundle" : "Course"} content`}
                      title_class_override={css("title", "title2")}
                      description=""
                    >
                      <React.Suspense fallback={<GlobalLoaderTrigger />}>
                        <Content chapters={chapters} isBundle={isBundle} />
                      </React.Suspense>
                    </Section>
                  )}
                  {audience && (
                    <Section
                      className={css("user-requirements-container")}
                      title="Who is this course for ?"
                      title_class_override={css("title", "title3")}
                      description=""
                    >
                      <React.Suspense fallback={<GlobalLoaderTrigger />}>
                        <div className={css("subtitle", "textDull")}>
                          <Interweave content={audience} />
                        </div>
                      </React.Suspense>
                    </Section>
                  )}
                  {requirements && (
                    <Section
                      className={css("course-requirements-container")}
                      title="Requirements"
                      title_class_override={css("title", "title3")}
                      description=""
                    >
                      <React.Suspense fallback={<GlobalLoaderTrigger />}>
                        <div className={css("paragraph", "textDull")}>
                          <Interweave content={requirements} />
                        </div>
                      </React.Suspense>
                    </Section>
                  )}
                  {!(isCFA || isBundle) && (
                    <Section
                      className={css("certificate-container")}
                      title="Yes, you will be certified with this course"
                      title_class_override={css("title", "title3")}
                      description=""
                      description_class_override={css("description", "paragraph")}
                    >
                      <React.Suspense fallback={<GlobalLoaderTrigger />}>
                        <Certificate src={certificate_url} />
                      </React.Suspense>
                    </Section>
                  )}
                </Sticky>
              </React.Suspense>
            </Section>
            <Section
              title="What our students have to say"
              title_class_override={css("title3")}
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
            <Section
              title="Recommended courses"
              title_class_override={css("title3", "title")}
              className={css("recommended-courses-container")}
            >
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <CardList list={recommended_courses} layout="grid" />
              </React.Suspense>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Link
                  navigateTo="/courses"
                  className={css("reset-link", "button", "button__style--outlined", "button__size--lg")}
                  style={{ width: "fit-content", margin: "8.8rem auto 0 auto" }}
                >
                  View all courses
                </Link>
              </React.Suspense>
            </Section>
            {refund_policy ? (
              <Section className={css("job-apply-banner-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <ApplyJobBanner
                    title={[
                      "No questions asked refund policy",
                      <br key="1" />,
                      <span key="2" className={css("subtitle", "textBold")}>
                        (valid for 3 days from - date of purchase or date of launch - whichever is later)
                      </span>,
                    ]}
                    button_title="Buy Now"
                    button_on_click={(e) => {
                      e.preventDefault();
                      const scrollBody = document.getElementById("scrollBody");
                      scrollBody.scrollTo({
                        top: 0,
                        behavior: preferReducedMotion ? "smooth" : "auto",
                      });
                    }}
                  />
                </React.Suspense>
              </Section>
            ) : (
              <>
                <Section className={css("contact-container")}>
                  <React.Suspense fallback={<GlobalLoaderTrigger />}>
                    <ContactUs />
                  </React.Suspense>
                </Section>
              </>
            )}
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default CourseDetail;
