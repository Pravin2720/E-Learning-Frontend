import axios from "axios";
import { callIfEnv } from "utils";

function prependBaseURL(url) {
  const baseURL = import.meta.env.VITE__VALUATIONARY_API_URL;

  if (!baseURL) console.warn("Set value of VITE__VALUATIONARY_API_URL in a .env file");
  if (!url || typeof url !== "string") console.warn("'url' should be a string");

  if (baseURL && url && url.slice(0, 7) !== "http://" && url.slice(0, 8) !== "https://") {
    return (
      baseURL +
      (!baseURL.endsWith("/") && !url.startsWith("/") ? "/" : "") +
      (baseURL.endsWith("/") && url.startsWith("/") ? url.slice(1) : url)
    );
  }
  return url;
}

function attachAuthHeaderOnDomainMatch(config) {
  const baseURL = import.meta.env.VITE__VALUATIONARY_API_URL;

  if (config.url.indexOf(baseURL) === 0) {
    const access_token = localStorage.getItem("user_auth_access_token");
    if (!access_token) callIfEnv("production", false, () => console.warn("access_token not found"));
    config.headers["authorization"] = `bearer ${access_token ?? ""}`;
  }
}

function attachReAuthHeaderOnDomainMatch(config) {
  const baseURL = import.meta.env.VITE__VALUATIONARY_API_URL;

  if (config.url.indexOf(baseURL) === 0) {
    const refresh_token = localStorage.getItem("user_auth_refresh_token");
    if (!refresh_token) callIfEnv("production", false, () => console.warn("refresh_token not found"));
    config.headers["reauthorization"] = `bearer ${refresh_token ?? ""}`;
  }
}

function triggerLogout() {
  if (window.location.pathname === "/login") return;
  window.dispatchEvent(new Event("logout_current_tab"));
  localStorage.setItem("logout_all_tabs", Date.now());
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.url = prependBaseURL(config.url);
    attachAuthHeaderOnDomainMatch(config);
    callIfEnv("production", false, () => console.debug("axios Request: ", config));
    return config;
  },
  function (error) {
    console.error("axios Request Error: ", error);
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    callIfEnv("production", false, () => console.log("axios Response: ", response));
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      if (error.response.status === 401) {
        if (error.response?.data?.error?.toLowerCase() === "token expired") {
          await refreshAccessToken();
          const new_config = {
            ...error.config,
            headers: { ...error.config.headers, authorization: "", reauthorization: "" },
          };
          attachAuthHeaderOnDomainMatch(new_config);
          return await axios(new_config);
        }
        triggerLogout();
      }

      console.error("axios Response Error: ", error.response);
      return Promise.reject(error);
    }

    // network error
    console.log({ "Network Error": "Internet connectivity is lost. Please check your network connection." });
  },
);

const axiosRefresh = axios.create();

// Add a request interceptor
axiosRefresh.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.url = prependBaseURL(config.url);
    attachAuthHeaderOnDomainMatch(config);
    attachReAuthHeaderOnDomainMatch(config);
    callIfEnv("production", false, () => console.debug("axiosRefresh Request: ", config));
    return config;
  },
  function (error) {
    console.error("axiosRefresh Request Error: ", error);
    // Do something with request error
    return Promise.reject(error);
  },
);

axiosRefresh.interceptors.response.use(
  function (response) {
    callIfEnv("production", false, () => console.log("axiosRefresh Response: ", response));
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("axiosRefresh returned 401", error.response?.data);
        triggerLogout();
      }
      console.error("axiosRefresh Response Error: ", error);
      return Promise.reject(error);
    }

    // network error
    console.log({ "Network Error": "Internet connectivity is lost. Please check your network connection." });
  },
);

const refreshAccessToken = async () => {
  const {
    headers: { authorization, reauthorization },
  } = await axiosRefresh.post("/auth/refresh", {});

  const access_token = authorization.startsWith("bearer") ? authorization.split("bearer ")[1] ?? null : null;
  localStorage.setItem("user_auth_access_token", access_token);

  const refresh_token = reauthorization.startsWith("bearer") ? reauthorization.split("bearer ")[1] ?? null : null;
  localStorage.setItem("user_auth_refresh_token", refresh_token);
};

export default axios;
