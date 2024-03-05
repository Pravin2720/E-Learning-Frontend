import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

const LinearLoader = ({ progress, total, style, showCount, cover, mlzero }) => {
  return (
    <ErrorBoundary>
      <div className="linear-loader" style={{ ...style, position: cover ? "absolute" : "relative" }}>
        {showCount && <p className="paragraph">{`${progress} / ${total}`}</p>}
        <div className="linear-loader-track" style={{ marginLeft: mlzero ? "0" : undefined }}>
          {showCount ? (
            <div className="determinate" style={{ width: `calc(${progress} / ${total} * 100%)` }}></div>
          ) : (
            <div className="indeterminate"></div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default LinearLoader;
