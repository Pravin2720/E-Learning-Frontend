import React from "react";
import MockData from "data/index";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";
import { SORT_TYPE } from "utils/sort.util";

import classnames from "classnames/bind";
import styles from "./home.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
const ApplyJobBanner = CustomLazy(
  import(/* webpackChunkName: "ApplyJobBanner" */ "components/apply_job_banner/apply_job_banner.component"),
);
// const Instructors = CustomLazy(
//   import(/* webpackChunkName: "Instructors" */ "components/instructors/instructors.component"),
// );

const Banner = CustomLazy(import(/* webpackChunkName: "Banner" */ "./sections/banner/banner.component"));
const Statistics = CustomLazy(
  import(/* webpackChunkName: "Statistics" */ "./sections/statistics/statistics.component"),
);
const Pitch = CustomLazy(import(/* webpackChunkName: "Pitch" */ "./sections/pitch/pitch.component"));
// const JobPrograms = CustomLazy(
//   import(/* webpackChunkName: "JobPrograms" */ "./sections/job_programs/job_programs.component"),
// );
// const PlacedAt = CustomLazy(import(/* webpackChunkName: "PlacedAt" */ "components/placed_at/placed_at.component"));
const MediaPresence = CustomLazy(
  import(/* webpackChunkName: "MediaPresence" */ "./sections/media_presence/media_presence.component"),
);
const Reviews = CustomLazy(import(/* webpackChunkName: "Reviews" */ "components/reviews/reviews.component"));
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));
const CardList = CustomLazy(import(/* webpackChunkName: "CardList" */ "components/card_list/card_list.component"));
const ContactUs = CustomLazy(import(/* webpackChunkName: "ContactUs" */ "components/contact_us/contact_us.component"));

// let faqs = [...MockData.faqs];
const recommended_courses = MockData.featured_courses.sort(SORT_TYPE.featured).slice(0, 6);
let instructors = [];
for (let id in MockData.instructors) {
  if (MockData.instructors[id].is_featured) instructors.push(MockData.instructors[id]);
}
let reviews = [];
for (let review of MockData.reviews) {
  if (review.is_featured) reviews.push(review);
}

const Home = () => {
  // const [instructors, setInstructors] = React.useState([]);
  // const [reviews, setReviews] = React.useState([]);
  // const [courses, setCourses] = React.useState([]);

  // useEffect(() => {
  //   const fetchData = async (url, setter, transform) => {
  //     let resp = await axios.get(url);
  //     if (resp.status === 200 && Array.isArray(resp.data.items)) setter(transform(resp.data.items));
  //   };

  //   fetchData("/instructors", setInstructors, (data) => data.filter((i) => i.is_featured === true));
  //   fetchData("/reviews", setReviews, (data) => data.filter((i) => i.is_featured === true && !i.course_id));
  //   // fetchData("/courses", setCourses, (data) => data.splice(0, 4));

  //   return () => {
  //     setInstructors([]);
  //     setReviews([]);
  //     // setCourses([]);
  //   };
  // }, []);

  // var polyfills = {
  //   REQUIRED_DEGREE: "CA or MBA (and more, see FAQs specific to the program)",
  //   ROLE: "Our programs focus on roles that",
  //   ALSO_ELIGIBLE: "",
  // };

  // const new_faqs = faqs.map((faq) => {
  //   return {
  //     title: fillTemplate(faq.title, polyfills),
  //     sub_items: faq.sub_items.map((item) => fillTemplate(item, polyfills)),
  //   };
  // });

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
            <Section className={css("statistics-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Statistics />
              </React.Suspense>
            </Section>
            <Section className={css("pitch-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Pitch />
              </React.Suspense>
            </Section>
            {/* <Section title="Our job programs" id="flagship" className={css("programs-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <JobPrograms />
              </React.Suspense>
            </Section> */}
            {Array.isArray(recommended_courses) && recommended_courses.length > 0 && (
              <Section
                id="courses"
                title="Our popular courses"
                description="From finance professionals to high school students, Valuationary's career courses have something value adding for everyone! Check our most popular courses below."
                className={css("courses-container")}
              >
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <CardList list={recommended_courses} />
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
            )}
            {/* {Array.isArray(instructors) && instructors.length > 0 && (
              <Section title="Meet our instructors" className={css("instructors-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Instructors captionOnHover instructors={instructors} />
                </React.Suspense>

                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Link
                    navigateTo="/courses"
                    className={css("reset-link", "button", "button__style--outlined", "button__size--lg")}
                    style={{ width: "fit-content", margin: "8.8rem auto 0 auto" }}
                  >
                    View the complete list
                  </Link>
                </React.Suspense>
              </Section>
            )} */}
            {Array.isArray(reviews) && reviews.length > 0 && (
              <Section title="What our candidates say" className={css("reviews-container")}>
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <Reviews reviews={reviews} />
                </React.Suspense>
              </Section>
            )}
            {/* {Array.isArray(MockData.gallery_logos) && MockData.gallery_logos.length > 0 && (
              <Section
                title="Our candidates are placed in:"
                title_class_override={css("subtitle", "title")}
                description_class_override={css("zMargin")}
                className={css("gallery-container")}
              >
                <React.Suspense fallback={<GlobalLoaderTrigger />}>
                  <PlacedAt logoList={MockData.gallery_logos} />
                </React.Suspense>
              </Section>
            )} */}
            <Section className={css("media-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <MediaPresence />
              </React.Suspense>
            </Section>
            <Section title="" className={css("job-apply-banner-container")}>
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <ApplyJobBanner
                  title={
                    <>
                      The best advisor for you is yourself.
                      <br />
                      Ready to become one?
                    </>
                  }
                  button_title="Explore Courses"
                  button_link="/courses"
                />
              </React.Suspense>
            </Section>
            <Section className={css("contact-container")}>
              <ContactUs />
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Home;
