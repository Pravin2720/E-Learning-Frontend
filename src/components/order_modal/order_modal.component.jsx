import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-form";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { orderOpenAtom } from "states/order/order.atoms";
import { userAtom } from "states/user/user.atoms";
import { cartListAtom, cartStatsSelector } from "states/cart/cart.atoms";

import { handleFormError } from "utils";
// import { checkoutInitiated } from "utils/analytics";
import axios from "utils/axios.util";
import { useSyncCart } from "utils/cart.util";
import CustomLazy from "utils/custom_lazy.util";
import loadScript from "utils/load_script.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./order_modal.module.scss";
const css = classnames.bind(styles);

const InputField = CustomLazy(
  import(/* webpackChunkName: "InputField" */ "components/input_field/input_field.component"),
);
const Modal = CustomLazy(import(/* webpackChunkName: "Modal" */ "components/modal/modal.component"));

const OrderModal = () => {
  const history = useHistory();

  const showOM = useRecoilValue(orderOpenAtom);
  const resetShowOM = useResetRecoilState(orderOpenAtom);

  const userData = useRecoilValue(userAtom);
  const cartList = useRecoilValue(cartListAtom);
  const cartStats = useRecoilValue(cartStatsSelector);
  const syncCart = useSyncCart();

  function redirectToSchool(queries) {
    history.push(`/purchase?${queries}`);
  }

  const defaultValues = React.useMemo(
    () => ({
      first_name: userData?.first_name ?? "",
      last_name: userData?.last_name ?? "",
      email: userData?.email ?? "",
      isd: "91",
      contact: "",
    }),
    [userData?.email, userData?.first_name, userData?.last_name],
  );
  const {
    Form,
    meta: { isSubmitting, canSubmit, error },
  } = useForm({
    defaultValues: defaultValues,
    onSubmit: async (values, instance) => {
      const { first_name, last_name, email, isd, contact } = values;
      const contactNo = `+${isd}${contact}`;
      const notes = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        contact: contactNo,
        entities: cartList,
      };
      const data = {
        ...notes,
        coupon_code: cartStats.coupon.valid ? cartStats.coupon.code : "",
        client_total: !isNaN(cartStats.discount) ? cartStats.total - cartStats.discount : cartStats.total,
      };
      const queries = encodeURI(
        [
          `origin=${window.location.origin}`,
          `location=${window.location.pathname}`,
          "route=/purchase",
          `entities=${JSON.stringify(data.entities)}`,
          `amount=${data.client_total}`,
        ].join("&"),
      );

      await handleFormError(instance, async () => {
        const response = await axios.post("/orders", data);
        const {
          status,
          data: { order },
        } = response;
        if ([200, 202].indexOf(status) === -1) throw response;

        resetShowOM();
        if (status === 200) {
          const script = await loadScript("https://checkout.razorpay.com/v1/checkout.js", true, true, "anonymous");
          if (!script) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
          }

          const callback_url = [`${import.meta.env.VITE__VALUATIONARY_API_URL}/razorpay/callback`, queries].join("?");
          var options = {
            timeout: 10 * 60, // 10 minute timeout
            key: JSON.parse(import.meta.env.VITE__RAZORPAY_API_KEY_ID)[order.mode],
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paisa
            currency: order.currency,
            order_id: order.id,
            name: "Valuationary",
            description: order.id,
            image: "https://www.valuationary.com/favicon_180x180.png",
            notes: notes,
            prefill: { email: email, contact: contactNo },
            callback_url: callback_url,
            redirect: true,
            handler: async (response) => {
              const result = await axios.post("/razorpay/callback", {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              });
              if (import.meta.env.REACT_APP_DEBUG === "true") alert(JSON.stringify(result));
              redirectToSchool(queries);
            },
            readonly: { contact: true, email: true, name: true },
            modal: { confirm_close: true },
          };

          const paymentObject = new window.Razorpay(options);
          // TODO fix fb events
          // checkoutInitiated(title, data.entity_type, [data.entity_id], parseFloat(order.amount) / 100, order.currency);
          paymentObject.open();
        } else if (status === 202) {
          // TODO fix fb events
          // checkoutInitiated(title, data.entity_type, [data.entity_id], parseFloat(0), "INR");
          redirectToSchool(queries);
        }

        await syncCart([]);
      });
    },
    validate: async (values, instance) => {
      const checkEmpty = (value) => !value.trim();
      const checkContact = (value) => {
        if (!value.trim()) return "Contact is required";
        if (isNaN(value.trim())) return "Contact should be only digits";
        if (value.trim().length !== 10) return "Contact should be exactly 10 digits";
      };

      // ─────────────────────────────────────────────────────────────────

      const { first_name, isd, contact } = values;

      const fnError = checkEmpty(first_name) ? "First Name is required" : null;
      instance.setFieldMeta("first_name", { isTouched: true, error: fnError });

      const isdError = checkEmpty(isd) ? "ISD Code should be only digits" : null;
      instance.setFieldMeta("isd", { isTouched: true, error: isdError });

      const cError = checkContact(contact);
      instance.setFieldMeta("contact", { isTouched: true, error: cError });

      return fnError || isdError || cError ? true : false;
    },
    debugForm: false,
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Modal show={showOM} close={resetShowOM} className={css("customContent", "modal")}>
        <ErrorBoundary>
          <h2 className={css("header2", "modal__header")}>Confirm Details</h2>
          <Form className={css("modal__form", "form")}>
            <div className={css("form__layout")}>
              <InputField
                type="email"
                field="email"
                placeholder="Email"
                className={css("paragraph")}
                containerClassName={css("input__size", "hide")}
                autoComplete="email"
                label="email"
              />
              <InputField
                type="text"
                field="first_name"
                placeholder="First Name"
                className={css("paragraph")}
                containerClassName={css("input__size")}
                autoComplete="given-name"
                label="First Name"
              />
              <InputField
                type="text"
                field="last_name"
                placeholder="Last Name"
                className={css("paragraph")}
                containerClassName={css("input__size")}
                autoComplete="family-name"
                label="Last Name"
              />
              <InputField
                type="text"
                field="isd"
                placeholder="ISD Code"
                className={css("paragraph")}
                containerClassName={css("input__size--isd")}
                autoComplete="tel-country-code"
                label="ISD"
                onInput={(e) => {
                  const { target } = e;
                  const [selectionStart, selectionEnd] = [target.selectionStart, target.selectionEnd];
                  target.value = parseInt(target.value.slice(0, 6)) || "";
                  target.setSelectionRange(selectionStart, selectionEnd);
                }}
              />
              <InputField
                type="text"
                field="contact"
                placeholder="Contact Number"
                className={css("paragraph")}
                containerClassName={css("input__size--contact")}
                autoComplete="tel"
                label="Contact"
                onInput={(e) => {
                  const { target } = e;
                  const [selectionStart, selectionEnd] = [target.selectionStart, target.selectionEnd];
                  target.value = parseInt(target.value.slice(0, 10)) || "";
                  target.setSelectionRange(selectionStart, selectionEnd);
                }}
              />
            </div>
            {error ? (
              <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
                <strong>{error}</strong>
                <p className={css("caption")}>
                  <br />
                  Try again after 5 mins in case of <b>amount validation failure</b>.
                  <br />
                  If the error does not make sense to you, take a screenshot of the screen and reach out to us. How to
                  contact us? check in the footer section.
                </p>
              </div>
            ) : null}
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <button
                type="submit"
                className={css(
                  "reset-button",
                  "button",
                  "button__size--sm",
                  "button__style--solid",
                  !canSubmit && "button__disabled",
                  "modal__button",
                )}
                disabled={!canSubmit}
              >
                Confirm
              </button>
            )}
          </Form>
        </ErrorBoundary>
      </Modal>
    </React.Suspense>
  );
};

export default OrderModal;
