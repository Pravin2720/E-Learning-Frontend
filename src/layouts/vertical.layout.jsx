import React from "react";

// import RedirectionModal from "components/redirection_modal/redirection_modal.component";

import MockData from "data/index";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";

import classnames from "classnames/bind";
import styles from "./vertical_layout.module.scss";
const css = classnames.bind(styles);

const ScrollTop = CustomLazy(import(/* webpackChunkName: "ScrollTop" */ "components/scroll_top/scroll_top.component"));
const Header = CustomLazy(import(/* webpackChunkName: "Header" */ "components/header/header.component"));
const Footer = CustomLazy(import(/* webpackChunkName: "Footer" */ "components/footer/footer.component"));
const Cart = CustomLazy(import(/* webpackChunkName: "Cart" */ "components/cart/cart.component"));
const NotificationBar = CustomLazy(
  import(/* webpackChunkName: "NotificationBar" */ "components/notification_bar/notification_bar.component"),
);
const RedirectionModal = CustomLazy(
  import(/* webpackChunkName: "RedirectionModal" */ "components/redirection_modal/redirection_modal.component"),
);

//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: P R O G R A M   L I N K S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

const programLinks = [];
for (let programID in MockData.programs) {
  programLinks.push({
    label: MockData.programs[programID].title,
    navigateTo: MockData.programs[programID].itemLink,
    order: MockData.programs[programID].order,
  });
}
programLinks.sort((a, b) => {
  //  order attr
  if (a.order && b.order) {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
  }
  return 0;
});

//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: C O U R S E   L I N K S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

var courses = [];
for (let id in MockData.courses) {
  if (MockData.courses[id].categories.indexOf("course") >= 0) courses.push({ ...MockData.courses[id] });
}
const coursesLinks = [];
for (let course of courses) {
  coursesLinks.push({
    label: course.title,
    navigateTo: course.itemLink,
    order: course.order,
  });
}
coursesLinks.sort((a, b) => {
  //  order attr
  if (a.order && b.order) {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
  }
  return 0;
});

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C F A   L I N K S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const cfaLinks = [
  {
    label: "CFA Level 1",
    navigateTo: "/cfa/1",
  },
  {
    label: "CFA Level 2",
    navigateTo: "/cfa/2",
  },
  {
    label: "CFA Level 3",
    navigateTo: "/cfa/3",
    disabled: true,
    comingSoon: true,
  },
];

//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E S O U R C E   L I N K S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//

const resourceLinks = [
  {
    label: "Blog",
    navigateTo: "http://valuationary.medium.com/",
  },
  {
    label: "Podcasts",
    navigateTo: "/podcasts",
  },
  // {
  //   label: "Knowledge Library",
  //   // navigateTo: "/library",
  // },
  {
    label: "Templates",
    navigateTo: "https://drive.google.com/drive/folders/1anHTCVuAUiskooMEu5E8JZ66pZIyybW_?usp=sharing",
  },
];

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: G R O U P S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const linkGroups = [
  // {
  //   label: "Job Programs",
  //   navigateTo: "/programs",
  //   // subLinks: programLinks,
  //   preventDefault: false,
  // },
  {
    label: "Courses",
    navigateTo: "/courses",
    // subLinks: coursesLinks,
    preventDefault: false,
    seeAll: true,
    limit: 8,
  },
  {
    label: "CFA",
    navigateTo: "/cfa/1",
    subLinks: cfaLinks,
    preventDefault: true,
  },
  {
    label: "Resources",
    navigateTo: "/resources",
    subLinks: resourceLinks,
    preventDefault: true,
  },
];

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: N A V B A R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const VerticalLayout = ({ hideFooter, hideUtilities, children }) => {
  return (
    <ErrorBoundary>
      <div className={css("verticalLayout")}>
        <div className={css("verticalLayout__header")}>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Header linkGroups={linkGroups} />
          </React.Suspense>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <NotificationBar />
          </React.Suspense>
        </div>
        <div className={css("verticalLayout__body", "window")}>
          <div className={css("window__container")} id="scrollBody">
            <main>{children}</main>
            {!hideFooter && (
              <React.Suspense fallback={<GlobalLoaderTrigger />}>
                <Footer linkGroups={linkGroups} />
              </React.Suspense>
            )}
          </div>
        </div>
        {!hideUtilities && (
          <div id="utilities" className={css("verticalLayout__utilities")}>
            <React.Suspense fallback={<GlobalLoaderTrigger />}>
              <ScrollTop />
            </React.Suspense>
            <React.Suspense fallback={<GlobalLoaderTrigger />}>
              <Cart />
            </React.Suspense>
          </div>
        )}
        <RedirectionModal />
      </div>
    </ErrorBoundary>
  );
};

export default VerticalLayout;
