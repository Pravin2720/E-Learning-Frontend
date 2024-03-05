import React from "react";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { callIfEnv } from "utils";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import GlobalLoader, { GlobalLoaderTrigger } from "utils/loader.util";

const Home = CustomLazy(import(/* webpackChunkName: "Home" */ "pages/home/home.page"));
const JobPrograms = CustomLazy(
  import(/* webpackChunkName: "JobPrograms" */ "pages/job_programs/job_programs_dedicated/job_programs.page"),
);
const Courses = CustomLazy(import(/* webpackChunkName: "Courses" */ "pages/courses/courses_dedicated/courses.page"));
const CourseDetail = CustomLazy(
  import(/* webpackChunkName: "CourseDetail" */ "pages/courses/course_detail/course_detail.page"),
);
const ProgramDetail = CustomLazy(
  import(/* webpackChunkName: "ProgramDetail" */ "pages/job_programs/job_program_detail/job_program_detail.page"),
);
// const Events = CustomLazy(import(/* webpackChunkName: "Events" */ "pages/events/events.page"));
const Podcasts = CustomLazy(import(/* webpackChunkName: "Podcasts" */ "pages/resources/podcasts/podcasts.page"));
// const KnowledgeLibrary = CustomLazy(
//    import(/* webpackChunkName: "KnowledgeLibrary" */"pages/resources/knowledge_library/knowledge_library.page"),
// );
const Auth = CustomLazy(import(/* webpackChunkName: "Auth" */ "pages/auth/auth.page"));
const RedirectPage = CustomLazy(import(/* webpackChunkName: "Redirect" */ "pages/redirect/redirect.page"));
const PageNotFound = CustomLazy(import(/* webpackChunkName: "PageNotFound" */ "pages/404.page"));
const UnderConstruction = CustomLazy(
  import(/* webpackChunkName: "UnderConstruction" */ "pages/under_construction.page"),
);
const PurchasePage = CustomLazy(import(/* webpackChunkName: "PurchasePage" */ "pages/purchase/purchase.page"));
const PrivacyPolicyPage = CustomLazy(
  import(/* webpackChunkName: "PrivacyPolicyPage" */ "pages/privacy_policy/privacy_policy.page"),
);
const TermsConditionsPage = CustomLazy(
  import(/* webpackChunkName: "TermsConditionsPage" */ "pages/terms_conditions/terms_conditions.page"),
);
const FAQs = CustomLazy(import(/* webpackChunkName: "FAQs" */ "pages/faqs/faqs.page"));
const Workshop = CustomLazy(import(/* webpackChunkName: "Workshop" */ "pages/workshop/workshop.page"));

const RouteChangeTracker = withRouter(({ history, children }) => {
  React.useEffect(() => {
    return history.listen((location) => {
      // console.trace("navigating to", location, action);
      callIfEnv("production", true, async () => {
        if (!window.ReactPixel) {
          const { default: ReactPixel } = await import(
            /* webpackChunkName: "ReactFacebookPixel" */ "react-facebook-pixel"
          );
          window.ReactPixel = ReactPixel;
          window.ReactPixel.init(import.meta.env.VITE__FB_PIXEL_TRACKING_ID);
        }
        if (!window.ReactGA) {
          const { default: ReactGA } = await import(/* webpackChunkName: "ReactGA" */ "react-ga");
          window.ReactGA = ReactGA;
          window.ReactGA.initialize(import.meta.env.VITE__GA_TRACKING_ID);
        }

        if (window.ReactPixel) {
          window.ReactPixel.pageView();
        }
        if (window.ReactGA) {
          window.ReactGA.set({ page: location.pathname });
          window.ReactGA.pageview(location.pathname + location.search);
        }
      });
    });
  }, [history]);

  React.useEffect(() => {
    const logout = () => history.push("/logout");
    window.addEventListener("logout_current_tab", logout);
    return () => {
      window.removeEventListener("logout_current_tab", logout);
    };
  }, [history]);

  React.useEffect(() => {
    const logoutSync = (event) => (event.key === "logout_all_tabs" ? history.push("/logout") : undefined);
    window.addEventListener("storage", logoutSync);
    return () => {
      window.removeEventListener("storage", logoutSync);
    };
  }, [history]);

  return <>{children}</>;
});

const Routes = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <RouteChangeTracker>
          <GlobalLoader />
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Switch>
              {/* Home  */}
              <Route exact path="/" component={Home} />
              {/* Unavailability  */}
              <Route exact path="/404" component={PageNotFound} />
              <Route exact path="/about" component={UnderConstruction} />
              {/* Auth Pages */}
              <Route exact path="/signup" component={Auth} />
              <Route exact path="/login" component={Auth} />
              <Route exact path="/logout" component={Auth} />
              <Route exact path="/reset" component={Auth} />
              {/* <Route exact path={panelLoginPath} component={AdminLoginPage} /> */}
              {/* Components */}
              <Route exact path="/programs" component={JobPrograms} />
              <Route exact path="/purchase" component={PurchasePage} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/course/:id" component={CourseDetail} />
              <Route exact path="/bundle/:id" component={CourseDetail} />
              <Route exact path="/program/:id" component={ProgramDetail} />
              <Route exact path="/cfa/:id" component={Courses} />
              <Route exact path="/faqs" component={FAQs} />
              <Route exact path="/workshop/:id" component={Workshop} />
              {/* <Route exact path="/events" component={Events} /> */}
              <Route exact path="/podcasts" component={Podcasts} />
              <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
              <Route exact path="/terms-and-conditions" component={TermsConditionsPage} />
              <Route exact path="/knowledge-library" component={UnderConstruction} />
              {/* Redirection */}
              <Route exact path="/redirect" component={RedirectPage} />
              {/* Control Panel */}
              {/* Unrecognized Paths */}
              <Route path="*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </React.Suspense>
        </RouteChangeTracker>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Routes;
