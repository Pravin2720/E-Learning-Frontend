import { instructors } from "data/instructors.data";
import { course_tags, courses } from "data/courses.data";
import { faqs } from "data/faqs.data";
import { gallery_logos } from "data/gallery.data";
import { programs } from "data/programs.data";
import { bundles } from "data/bundles.data";
import { reviews } from "data/reviews.data";
import { podcasts } from "data/podcasts.data";
import { playlists } from "data/library.data";
import { steps } from "data/program_walkthrough_steps.data";
import { workshops } from "data/workshops.data";

//
// ────────────────────────────────────────────────── I ──────────
//   :::::: F I N A L : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

var featured_courses = [
  ...Object.values(bundles)
    .filter((v) => v.categories.indexOf("course") !== -1)
    .map((v) => ({ ...v, isBundle: true }))
    .filter((v) => v.is_featured),
  ...Object.values(courses).filter((v) => v.is_featured),
];

var pure_courses = [
  ...Object.values(bundles)
    .filter((v) => v.categories.indexOf("course") !== -1)
    .map((v) => ({ ...v, isBundle: true })),
  ...Object.values(courses).filter((v) => v.categories.indexOf("course") !== -1),
  ...Object.values(workshops).map((v) => ({ ...v, isWorkshop: true })),
];

var cfa_courses = {};
for (let level = 1; level <= 3; level++) {
  cfa_courses[level] = [
    ...Object.values(bundles)
      .filter((v) => v.categories.indexOf("cfa_level_" + level) !== -1)
      .map((v) => ({ ...v, isBundle: true })),
    ...Object.values(courses)
      .filter((v) => v.categories.indexOf("cfa_level_" + level) !== -1)
      .map((v) => ({ ...v, isCFA: true })),
  ];
}

const MockData = {
  bundles,
  courses,
  featured_courses,
  pure_courses,
  cfa_courses,
  course_tags,
  reviews,
  instructors,
  programs,
  faqs,
  gallery_logos,
  podcasts,
  playlists,
  program_steps: steps,
  workshops,
};

export default MockData;
