import React from "react";
import { RecoilRoot } from "recoil";
import { callIfDocReady, callIfEnv, getNetworkType } from "utils";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import loadScript from "utils/load_script.util";
import loadStyle from "utils/load_style.util";

const Routes = CustomLazy(import(/* webpackChunkName: "Routes" */ "routes"));
const CookieConsent = CustomLazy(import(/* webpackChunkName: "CookieConsent" */ "utils/cookie_consent.util"));

const timeoutMap = {
  "4g": 0,
  "3g": 750,
  "2g": 1500,
};
const timeout_ms = timeoutMap[getNetworkType()] || 3000;

const App = () => {
  React.useEffect(() => {
    const loadFont = async () => {
      const queries = ["family=DM+Sans:wght@400;600", "family=Poppins:wght@400;600", "display=swap"].join("&");
      const link = await loadStyle(["https://fonts.googleapis.com/css2", queries].join("?"), true, true, "*");
      if (!link) console.error("failed to load fonts");
    };
    const cleanupLoadFont = callIfDocReady(loadFont);
    return () => {
      if (typeof cleanupLoadFont === "function") cleanupLoadFont();
    };
  }, []);

  React.useEffect(() => {
    let tawk_timeoutID = null;
    let event_attached = false;
    const loadTawkTo = () => {
      window.addEventListener("tawk_load", () => {
        tawk_timeoutID = setTimeout(() => {
          callIfEnv("production", true, async () => {
            const script = await loadScript("https://embed.tawk.to/6118e6f3d6e7610a49b043b9/1fd4kcaeu", true, true);
            if (!script) console.error("failed to load Tawk.to");
          });
        }, timeout_ms + 3000);
      });
      event_attached = true;
    };
    const cleanupLoadTawkTo = callIfDocReady(loadTawkTo);

    return () => {
      if (tawk_timeoutID) clearTimeout(tawk_timeoutID);
      if (event_attached) window.removeEventListener("tawk_load", loadTawkTo);
      if (typeof cleanupLoadTawkTo === "function") cleanupLoadTawkTo();
    };
  }, []);

  React.useEffect(() => {
    let gtm_timeoutID = null;
    let event_attached = false;
    const loadGTM = () => {
      window.addEventListener("gtm_load", () => {
        gtm_timeoutID = setTimeout(() => {
          callIfEnv("production", true, async () => {
            window["dataLayer"] = window["dataLayer"] || [];
            window["dataLayer"].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            const id = import.meta.env.VITE__GTM_CONTAINER_ID ?? "";
            const script = await loadScript(`https://www.googletagmanager.com/gtm.js?id=${id}`, true, true, "*");
            if (!script) console.error("failed to load GTM");
          });
        }, 0);
      });
      event_attached = true;
    };
    const cleanupLoadGTM = callIfDocReady(loadGTM);

    return () => {
      if (gtm_timeoutID) clearTimeout(gtm_timeoutID);
      if (event_attached) window.removeEventListener("gtm_load", loadGTM);
      if (typeof cleanupLoadGTM === "function") cleanupLoadGTM();
    };
  }, []);

  React.useEffect(() => {
    return callIfDocReady(() => {
      const gtm_l_e = new Event("gtm_load");
      window.dispatchEvent(gtm_l_e);
    });
  }, []);

  return (
    <ErrorBoundary>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CookieConsent />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </React.Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export default App;
