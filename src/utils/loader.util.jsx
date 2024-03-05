import React from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { loaderAtomFamily, loaderRegisterSelectorFamily, loaderReportSelectorFamily } from "states/loader/loader.atoms";
import ErrorBoundary from "./error_boundary.util";
import Trigger from "./trigger.util";

import LinearLoader from "components/loader/loader.component";

//
// ─── GLOBAL LOADER ──────────────────────────────────────────────────────────────
//

const GlobalLoader = () => {
  const globalLoader = loaderAtomFamily("global");
  const status = useRecoilValue(globalLoader);
  const resetLoader = useResetRecoilState(globalLoader);

  const [startTime, setStartTime] = React.useState(0.0);
  const [visible, setVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    if (startTime === 0.0 && status.isVisible === true) setStartTime(performance.now());
    if (startTime !== 0.0 && status.isVisible === false) setStartTime(0.0);
  }, [status.isVisible, startTime]);

  React.useEffect(() => {
    if (status.progress >= status.total && status.progress !== 0) {
      const timeout = Math.max(0, 500 - (startTime ? performance.now() - startTime : 0));
      var timeoutID = setTimeout(() => {
        // console.log("resetting loader count", timeout);
        resetLoader();
      }, timeout);
    }
    return () => {
      if (timeoutID) clearTimeout(timeoutID);
    };
  }, [status.progress, status.total, resetLoader, startTime]);

  React.useLayoutEffect(() => {
    var timeoutID;
    timeoutID = setTimeout(
      () => visible !== status.isVisible && setVisible(status.isVisible),
      status.isVisible ? 0 : 250,
    );
    return () => clearTimeout(timeoutID);
  }, [status.isVisible, visible]);

  return (
    <ErrorBoundary>
      {visible && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            zIndex: "1000",
            opacity: status.isVisible ? "1" : "0",
            transition: visible ? "opacity 250ms ease" : "",
            backgroundColor: "#12151d",
          }}
        >
          <LinearLoader {...status} showCount={import.meta.env.NODE_ENV === "development"} />
        </div>
      )}
    </ErrorBoundary>
  );
};

export const GlobalLoaderTrigger = ({ children }) => {
  // console.log("GlobalLoaderTrigger called");
  const register = useSetRecoilState(loaderRegisterSelectorFamily("global"));
  const report = useSetRecoilState(loaderReportSelectorFamily("global"));

  return (
    <Trigger onLoad={register} onComplete={report}>
      {children}
    </Trigger>
  );
};

export default GlobalLoader;
