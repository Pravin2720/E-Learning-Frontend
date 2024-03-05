import React from "react";

import Accordion from "components/accordion/accordion.component";

import ErrorBoundary from "utils/error_boundary.util";

const Content = ({ chapters, isBundle }) => {
  const totalLectures = (chapters || []).reduce((total, chapter) => {
    return chapter.sub_items ? total + (chapter.sub_items.length ?? 0) : total;
  }, 0);

  return (
    <ErrorBoundary>
      <p className="paragraph" style={{ marginBottom: "4rem" }}>
        {[
          `${chapters.length} ${isBundle ? "courses" : "sections"}`,
          `${totalLectures} ${isBundle ? "topics" : "lectures"}`,
        ].join(`\u00A0\u00A0\u2022\u00A0\u00A0`)}
      </p>
      <Accordion items={chapters} first_open />
    </ErrorBoundary>
  );
};

export default Content;
