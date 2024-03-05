export const sendOrderEvents = async (event, name, type, contents, value, currency = "INR") => {
  if (!window.ReactPixel) {
    const { default: ReactPixel } = await import(/* webpackChunkName: "ReactFacebookPixel" */ "react-facebook-pixel");
    window.ReactPixel = ReactPixel;
    window.ReactPixel.init(import.meta.env.VITE__FB_PIXEL_TRACKING_ID);
  }
  if (window.ReactPixel) {
    window.ReactPixel.track(event, {
      content_name: name,
      content_type: type,
      content_ids: contents,
      value: value,
      currency: currency,
    });
  }
};

export const checkoutInitiated = async (...args) => {
  sendOrderEvents("InitiateCheckout", ...args);
};

export const PurchaseSuccess = async (...args) => {
  sendOrderEvents("Purchase", ...args);
};
