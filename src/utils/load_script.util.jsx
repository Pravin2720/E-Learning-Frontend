const loadScript = (src, async = null, defer = null, crossOrigin = null, cb = () => {}) => {
  if (!src) return Promise.reject("src is mandatory");

  const existing = document.querySelector(`script[src='${src}']`);
  if (existing?.length > 0) {
    existing.dispatchEvent(new Event("fire_callback"));
    return Promise.resolve(true);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    if (crossOrigin) script.crossOrigin = crossOrigin;
    if (async) script.async = async;
    if (defer) script.defer = defer;
    script.type = "text/javascript";
    script.src = src;
    script.addEventListener("fire_callback", cb);
    script.onload = () => {
      script.dispatchEvent(new Event("fire_callback"));
      resolve(true);
    };
    script.onerror = (error) => {
      console.error("load_script script.onerror", error);
      reject(error);
    };
    document.head.appendChild(script);
  });
};

export default loadScript;
