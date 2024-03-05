import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { StyleSheet, css } from "aphrodite-jss";
import { colors, globalStyles } from "styles/global.style";
import MockData from "data/index";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Filter = CustomLazy(import(/* webpackChunkName: "Filter" */ "components/course_filter/course_filter.component"));
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const filters = [];
// const filters = ["5-8%", "8-12%", "10-12%", "13-17%", "15-20%"];

const CFAExtra = () => {
  return (
    <div>
      <div style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: 700 }}>Perks</div>
      <ul style={{ fontSize: "1.8rem", listStyle: "none" }}>
        <li>
          <img
            src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
            width="12px"
            height="12px"
            alt="toggle"
            style={{ transform: "rotate(-90deg)", marginRight: "1rem" }}
          />
          Subject-wise mock tests
        </li>
        <li>
          <img
            src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
            width="12px"
            height="12px"
            alt="toggle"
            style={{ transform: "rotate(-90deg)", marginRight: "1rem" }}
          />
          Lifetime course access
        </li>
        <li>
          <img
            src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
            width="12px"
            height="12px"
            alt="toggle"
            style={{ transform: "rotate(-90deg)", marginRight: "1rem" }}
          />
          Live on-demand doubt sessions with instructors
        </li>
      </ul>
      <div style={{ marginTop: "4rem" }}>These are not all. Open the courses to find out more.</div>
    </div>
  );
};

const CFA = () => {
  const history = useHistory();
  const { id: level } = useParams();
  if (!level || (level && level > 3)) {
    history.replace("/404");
    return;
  }

  const PageTitle = "CFA" + (isNaN(parseInt(level)) ? "" : " Level-" + level);
  document.title = PageTitle;

  var mockData = [];
  for (let bundleID in MockData.bundles) {
    if (MockData.bundles[bundleID].categories.indexOf("cfa_level_" + level) === -1) continue;
    mockData.push({ ...MockData.bundles[bundleID], isBundle: true });
  }
  for (let courseID in MockData.courses) {
    if (MockData.courses[courseID].categories.indexOf("cfa_level_" + level) === -1) continue;
    mockData.push(MockData.courses[courseID]);
  }

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <VerticalLayout>
          <div className={css(globalStyles.contentMaxWidthAlignment)}>
            <div className={css(styles.headerText)}>
              {PageTitle} <br />
              {level === "1" && (
                <h5>
                  In association with
                  <span style={{ color: colors.primary, cursor: "auto" }}>&nbsp;Panoramic Education</span>
                </h5>
              )}
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Link navigateTo="/" className={css(globalStyles.resetLinkCSS, globalStyles.linkWithImg)}>
                <img src="/images/LeftArrow.svg" width="12px" height="12px" alt="Go Back" />
                Go Home
              </Link>
            </React.Suspense>
            {mockData.length > 0 ? (
              <div className={css(styles.contentSection)}>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Filter
                    title={filters.length > 0 ? "Total Weight" : " "}
                    filters={filters}
                    dataList={mockData}
                    extra={<CFAExtra />}
                  />
                </React.Suspense>
              </div>
            ) : (
              <div className={css(styles.comingSoon)}>Coming Soon...</div>
            )}
          </div>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "3.6rem",
    lineHeight: "4.2rem",
    fontWeight: "700",
    margin: "4.2rem 0",
  },
  contentSection: {
    width: "100%",
    marginBottom: "20rem",
  },
  comingSoon: {
    fontSize: "6rem",
    color: colors.primary,
    backgroundColor: colors.secondary,
    textAlign: "center",
    padding: "6rem",
    margin: "6rem 0",
    borderRadius: "0.8rem",
    boxShadow: "0 1.25rem 1rem -1rem rgba(0,0,0,0.15)",
  },
});

export default CFA;
