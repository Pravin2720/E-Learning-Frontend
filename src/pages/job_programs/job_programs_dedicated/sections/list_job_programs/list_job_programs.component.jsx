import React from "react";
import MockData from "data/index";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";

import classnames from "classnames/bind";
import styles from "./list_job_programs.module.scss";
const css = classnames.bind(styles);

const ProgramCard = CustomLazy(
  import(/* webpackChunkName: "ProgramCard" */ "components/program_card/program_card.component"),
);

var mockData = [];
for (let id in MockData.programs) {
  mockData.push({ ...MockData.programs[id] });
}

const ListJobPrograms = () => {
  return (
    <ErrorBoundary>
      <div className={css("programs")}>
        <React.Suspense fallback={<GlobalLoaderTrigger />}>
          {mockData.map((i, index) => (
            <ProgramCard {...i} key={index} title_class_override={"title4"} showImage />
          ))}
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default ListJobPrograms;
