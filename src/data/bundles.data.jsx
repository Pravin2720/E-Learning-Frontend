import { courses } from "data/courses.data";
import { course_summary } from "data/course_summary.data";
import { fillTemplate } from "utils";
import { shortDateFormatter } from "utils/dayjs.util";

const bundles = {
  "bundle-cfa-level-1-all-subjects": {
    title: "CFA Level-1 (All Subjects)",
    slug: "bundle-cfa-level-1-all-subjects",
    tags: [],
    short_description: "This bundle comprises all the courses available in Level 1.",
    long_description: "This bundle comprises all the courses available in Level 1.",
    image_url: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/cfa_level_1_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/cfa_level_1_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/cfa_level_1_grid_min.svgz",
    poster_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/poster/webp/cfa_bundle_promo_poster_854x480.webp",
    video_url: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/cfa_bundle_promo_480_custom.m4v",
    offer_price: "11999",
    videos: "",
    duration: "60 hrs 2 mins",
    downloadables: "27 PDFs",
    categories: ["bundle", "cfa", "cfa_level_1"],
    chapters: [
      courses["ethical-professional-standards"],
      courses["quantitative-methods"],
      courses["economics-cfa-level-1"],
      courses["financial-reporting-analysis"],
      courses["corporate-issuers-cfa-level-1"],
      courses["equity-investments"],
      courses["fixed-income"],
      courses["derivatives-cfa-level-1"],
      courses["alternative-investments"],
      courses["portfolio-management-cfa-level-1"],
    ],
    reviews: [],
    creator_id: "",
  },
  "bundle-cfa-level-2-all-subjects": {
    title: "CFA Level-2 (All Subjects)",
    slug: "bundle-cfa-level-2-all-subjects",
    coming_soon: false,
    pre_launch: true,
    launch_date: shortDateFormatter("2022/02/05"),
    tags: [],
    short_description: "This bundle comprises all the courses available in Level 2.",
    long_description: "This bundle comprises all the courses available in Level 2.",
    image_url: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/cfa_level_2_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/cfa_level_2_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/cfa_level_2_grid_min.svgz",
    poster_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/poster/webp/cfa_bundle_promo_poster_854x480.webp",
    video_url: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/cfa_bundle_promo_480_custom.m4v",
    offer_price: "15000",
    videos: "",
    // duration: "60 hrs 2 mins",
    // downloadables: "27 PDFs",
    enrollments: "300+",
    categories: ["bundle", "cfa", "cfa_level_2"],
    chapters: [
      courses["ethical-professional-standards-cfa-level-2"],
      courses["quantitative-methods-cfa-level-2"],
      courses["economics-cfa-level-2"],
      courses["financial-reporting-analysis-cfa-level-2"],
      courses["corporate-issuers-cfa-level-2"],
      courses["equity-investments-cfa-level-2"],
      courses["fixed-income-cfa-level-2"],
      courses["derivatives-cfa-level-2"],
      courses["alternative-investments-cfa-level-2"],
      courses["portfolio-management-cfa-level-2"],
    ],
    reviews: [],
    creator_id: "",
  },
  "bundle-a-complete-guide-to-stock-market-investing": {
    title: "A Complete Guide to Stock market Investing: 6-in-1 Course",
    slug: "bundle-a-complete-guide-to-stock-market-investing",
    tags: [],
    is_featured: 4,
    short_description:
      "Learn the art of stock market investing with an all inclusive  comprehensive playbook of 6-in-1 courses. Apply the learnings in the real world by building your portfolio from scratch!",
    long_description:
      "Learn the art of stock market investing with an all inclusive  comprehensive playbook of 6-in-1 courses. Apply the learnings in the real world by building your portfolio from scratch!",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/bundle-a-complete-guide-to-stock-market-investing.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/bundle-a-complete-guide-to-stock-market-investing.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/bundle-a-complete-guide-to-stock-market-investing.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/bundle-a-complete-guide-to-stock-market-investing.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/bundle-a-complete-guide-to-stock-market-investing.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/bundle-a-complete-guide-to-stock-market-investing.webp 422w",
    offer_price: "3000",
    videos: "",
    // duration: "60 hrs 2 mins",
    // downloadables: "27 PDFs",
    categories: ["bundle", "course"],
    chapters: [
      courses["art-of-picking-multibagger-stocks"],
      courses["portfolio-management-with-entry-exit-strategies"],
      courses["beginner-s-guide-to-investing"],
      courses["stock-market"],
      courses["technical-analysis-cash-equity"],
      courses["technical-analysis-derivatives"],
    ],
    reviews: [],
    creator_id: "",
  },
};

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: B U N D L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

for (let id in bundles) {
  let totalVideos = 0;
  let totalPrice = 0;
  let all_instructors = [];
  for (let course of bundles[id].chapters) {
    totalPrice += parseInt(course.markup_price);
    totalVideos += parseInt(course.videos);
    all_instructors = [...all_instructors, ...course.instructors];
    course.sub_items = [...course.chapters];
  }
  const unique_instructors = all_instructors.filter((v, i, a) => a.indexOf(v) === i);

  let summary = [];
  if (!bundles[id].lifetime_access) bundles[id].lifetime_access = true;
  if (!bundles[id].completion_certificate) bundles[id].completion_certificate = false;
  if (!bundles[id].access_on_devices) bundles[id].access_on_devices = "mobile and web";

  for (const [key, value] of Object.entries(course_summary)) {
    if (bundles[id][key]) summary.push({ ...value, title: fillTemplate(value.title, bundles[id]) });
  }
  bundles[id].summary = summary;

  bundles[id].instructors = unique_instructors;
  bundles[id].markup_price = totalPrice;
  bundles[id].videos = totalVideos;
  if (bundles[id].offer_price)
    bundles[id].discount = Math.round(100 * (1.0 - parseInt(bundles[id].offer_price) / parseInt(totalPrice)));
  if (!bundles[id].coming_soon) bundles[id].itemLink = "/bundle/" + id;
}

export { bundles };
