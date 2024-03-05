import React from "react";
import MockData from "data/index";
import { useHistory, useParams } from "react-router-dom";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";
import { SORT_TYPE } from "utils/sort.util";

import classnames from "classnames/bind";
import styles from "./workshop.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const CardList = CustomLazy(import(/* webpackChunkName: "CardList" */ "components/card_list/card_list.component"));
const ContactUs = CustomLazy(import(/* webpackChunkName: "ContactUs" */ "components/contact_us/contact_us.component"));

const Banner = CustomLazy(import(/* webpackChunkName: "Banner" */ "./sections/banner/banner.component"));
const CheckList = CustomLazy(import(/* webpackChunkName: "CheckList" */ "./sections/checklist/checklist.component"));
const Statistics = CustomLazy(
  import(/* webpackChunkName: "Statistics" */ "./sections/statistics/statistics.component"),
);
const Instructors = CustomLazy(
  import(/* webpackChunkName: "Instructors" */ "./sections/instructors/instructors.component"),
);

const valid_underscore_urls = import.meta.env.VITE__ALLOWED_ALTERNATE_COURSE_URLS;

const Workshop = () => {
  const history = useHistory();
  const { id: ogItemID } = useParams();
  const validID = valid_underscore_urls.includes(ogItemID);
  const altItemID = ogItemID?.replaceAll("_", "-");
  const itemID = validID ? altItemID : ogItemID;
  const details = React.useMemo(() => MockData.workshops[itemID], [itemID]);

  if (!details) {
    history.replace("/404");
    return <></>;
  }

  const { instructors, learnings, bg_image_url, ...courseSummary } = details;
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
              <Banner {...courseSummary} entity={"workshop"} />

              {bg_image_url && (
                <div className={css("bannerBG")}>
                  <img srcSet={bg_image_url} sizes="100vw" alt="banner background" className={css("bannerBG__image")} />
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
            {itemID === "art-of-picking-multibagger-stocks" && (
              <Section className={css("checklist-container")} title="What you'll learn" description="">
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <CheckList item_list={learnings} />
                </React.Suspense>
              </Section>
            )}

            {Array.isArray(instructors) && instructors.length > 0 && (
              <Section
                className={css("instructors-container")}
                title={`Instructor${instructors.length > 1 ? "s" : ""} for this workshop`}
                title_class_override={css("title", "title2")}
                description=""
                description_class_override={css("description", "paragraph")}
              >
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Instructors instructors={instructors} />
                </React.Suspense>
              </Section>
            )}
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
            <Section className={css("contact-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ContactUs />
              </React.Suspense>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Workshop;
