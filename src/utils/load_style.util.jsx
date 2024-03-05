const loadStyle = (src, async = null, defer = null, crossOrigin = null, cb = () => {}) => {
  if (!src) return Promise.reject("src is mandatory");

  const existing = document.querySelector(`link[href='${src}']`);
  if (existing) {
    return Promise.resolve(existing);
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    if (crossOrigin) link.crossOrigin = crossOrigin;
    if (async) link.async = async;
    if (defer) link.defer = defer;
    link.rel = "stylesheet";
    link.href = src;
    link.onload = () => {
      resolve(true);
      cb();
    };
    link.onerror = (error) => {
      console.error(error);
      reject(error);
    };
    document.head.appendChild(link);
  });
};

export default loadStyle;
