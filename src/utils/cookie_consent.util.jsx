import React from "react";
import ReactCookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { colors } from "styles/global.style";
import { callIfDocReady } from "utils";
import { callIfEnv } from "utils";

const CookieConsent = () => {
  const handleAcceptCookie = () => {
    callIfEnv("production", true, () => {
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
      if (window.ReactPixel) {
        window.ReactPixel.init(import.meta.env.VITE__FB_PIXEL_TRACKING_ID);
        window.ReactPixel.pageView();
      }
      if (window.ReactGA) {
        window.ReactGA.initialize(import.meta.env.VITE__GA_TRACKING_ID);
        window.ReactGA.pageview(window.location.pathname + window.location.search);
      }
    });

    return callIfDocReady(() => {
      const tl_e = new Event("tawk_load");
      window.dispatchEvent(tl_e);
    });
  };

  const handleDeclineCookie = () => {
    callIfEnv("production", true, () => {
      if (window.ReactPixel) {
        window.ReactPixel.init(import.meta.env.VITE__FB_PIXEL_TRACKING_ID);
        window.ReactPixel.revokeConsent();
      }

      // // remove google analytics cookies
      // Cookies.remove("_ga");
      // Cookies.remove("_gat");
      // Cookies.remove("_gid");
      // // remove facebook pixel cookies
      // Cookies.remove("xs");
      // Cookies.remove("c_user");
      // Cookies.remove("locale");
      // Cookies.remove("spin");
      // Cookies.remove("wd");
      // Cookies.remove("fr");
      // Cookies.remove("sb");
      // Cookies.remove("datr");
    });
  };

  React.useEffect(() => {
    let cleanupTawkLoadDispatch = null;
    (async () => {
      callIfEnv("production", true, async () => {
        if (!window.ReactPixel) {
          const { default: ReactPixel } = await import(
            /* webpackChunkName: "ReactFacebookPixel" */ "react-facebook-pixel"
          );
          window.ReactPixel = ReactPixel;
        }
        if (!window.ReactGA) {
          const { default: ReactGA } = await import(/* webpackChunkName: "ReactGA" */ "react-ga");
          window.ReactGA = ReactGA;
        }
      });
      if (getCookieConsentValue() !== "true") handleDeclineCookie();
      else cleanupTawkLoadDispatch = handleAcceptCookie();
    })();
    return () => {
      if (typeof cleanupTawkLoadDispatch === "function") cleanupTawkLoadDispatch();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactCookieConsent
      onAccept={handleAcceptCookie}
      sameSite="strict"
      cookieSecurity="Secure"
      overlay={false}
      style={{
        backgroundColor: colors.primary,
        color: colors.white,
        alignItems: "center",
        boxShadow: "0 -1rem 2rem rgba(0, 0, 0, 0.15)",
      }}
      buttonText={"OK"}
      buttonStyle={{
        backgroundColor: colors.white,
        color: colors.primary,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "2.2rem",
        fontWeight: "600",
        borderRadius: "1rem",
        padding: "0.9rem 5rem",
        boxShadow: "0 1.8rem 3.6rem 0 rgba(0, 0, 0, 0.2)",
        marginRight: "2rem",
      }}
    >
      We use cookies and other tracking technologies to improve your browsing experience on our website, to show you
      personalized content, to analyze our website traffic, and to understand where our visitors are coming from. By
      continuing to browse, you agree to our use of cookies. For more details please check our privacy policy.
    </ReactCookieConsent>
  );
};

export default CookieConsent;
