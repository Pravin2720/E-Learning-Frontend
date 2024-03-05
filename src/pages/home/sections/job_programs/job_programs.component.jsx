import React from "react";
import MockData from "data/index";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./job_programs.module.scss";
const css = classnames.bind(styles);

const ProgramCard = CustomLazy(
  import(/* webpackChunkName: "ProgramCard" */ "components/program_card/program_card.component"),
);
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

var mockData = [];
for (let id in MockData.programs) mockData.push({ ...MockData.programs[id] });

const images = {
  "hedge-fund-accountant":
    "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/job_programs/jb_bg_1.webp",
  "research-analyst": "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/job_programs/jb_bg_2.webp",
};

const JobPrograms = () => {
  return (
    <ErrorBoundary>
      <div className={css("programs")}>
        {mockData &&
          mockData.map((program, index) => (
            <React.Suspense key={index} fallback={<div>Loading...</div>}>
              <div className={css("programs__row", `programs__row--${(index + 1) % 2 ? "left" : "right"}`)}>
                <ProgramCard
                  key={index}
                  showChip
                  showTags
                  className={css((index + 1) % 2 ? "col--left" : "col--right")}
                  {...program}
                />
                <div className={css("circleMesh", `circleMesh--${(index + 1) % 2 ? "right" : "left"}`)}>
                  <img
                    srcSet={images[program.slug]}
                    alt={program.slug}
                    className={css("image")}
                    width="700px"
                    height="700px"
                  />
                </div>
              </div>
            </React.Suspense>
          ))}
      </div>
    </ErrorBoundary>
  );
};

export default JobPrograms;
