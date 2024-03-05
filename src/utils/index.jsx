export const deepGet = (obj) => (path, defaultReturn) => {
  var paths = path.split("."),
    current = obj,
    i;
  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return defaultReturn || undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
};

export const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(6, "0")
  );
};

export const fillTemplate = (templateString, templateVariables) =>
  templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g]);

export const callIfEnv = (env = "production", match = true, fn = () => {}) => {
  if ((import.meta.env.NODE_ENV === env) === match) fn();
};

export const callIfDocReady = (fn = () => {}) => {
  if (document.readyState === "complete") {
    fn();
  } else {
    window.addEventListener("load", fn);
    return () => window.removeEventListener("load", fn);
  }
};

export const getNetworkType = () => {
  var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var type =
    ("NetworkInformation" in window && NetworkInformation.effectiveType) || (connection && connection.effectiveType);
  return type;
};

export const validateEmail = (email) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const handleRedirect = (history, return_to_path) => {
  if (return_to_path)
    return_to_path?.startsWith("/") ? history?.push(return_to_path) : (window.location = return_to_path);
};

export const handleFormError = async (instance, func) => {
  try {
    await func();
  } catch (e) {
    console.error(e);
    const response = e.isAxiosError ? e.response : e;
    const {
      data: { error, errors },
    } = response;
    if (Array.isArray(errors)) {
      for (const { param, msg } of errors) {
        if (param in instance.values) {
          instance.setFieldMeta(param, { error: msg });
        } else {
          instance.setMeta({ error: [param, msg].join(" | ") });
        }
      }
    } else instance.setMeta({ error: typeof error === "string" ? error : error.message });
  }
};
