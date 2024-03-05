import React from "react";
import qs from "qs";
import { useForm } from "react-form";
import ReactModal from "react-modal";
import { useHistory } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartCouponAtom, cartListAtom, cartOpenAtom, cartStatsSelector } from "states/cart/cart.atoms";
import { orderOpenAtom } from "states/order/order.atoms";
import { userStatusSelector } from "states/user/user.atoms";

import { callIfDocReady, handleFormError } from "utils";
import axios from "utils/axios.util";
import { useSyncCart } from "utils/cart.util";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./cart.module.scss";
const css = classnames.bind(styles);

const InputField = CustomLazy(
  import(/* webpackChunkName: "InputField" */ "components/input_field/input_field.component"),
);
const CartCardList = CustomLazy(
  import(/* webpackChunkName: "CartCardList" */ "./components/cart_card_list/cart_card_list.component"),
);
const OrderModal = CustomLazy(
  import(/* webpackChunkName: "OrderModal" */ "components/order_modal/order_modal.component"),
);

const Cart = () => {
  React.useEffect(() => ReactModal.setAppElement("#root"));

  const history = useHistory();
  const syncCart = useSyncCart();
  const query = new URLSearchParams("returnurl=" + encodeURIComponent(window.location.pathname));
  let login_url = ["/login", query.toString()].join("?");
  const redirectToLogin = () => {
    closeCart();
    history.push(login_url);
  };

  const cartStats = useRecoilValue(cartStatsSelector);
  const userStatus = useRecoilValue(userStatusSelector);
  const [cartOpen, setCartOpen] = useRecoilState(cartOpenAtom);
  const setShowOM = useSetRecoilState(orderOpenAtom);
  const closeCart = () => setCartOpen(false);
  const showOrder = () => {
    closeCart();
    setShowOM(true);
  };

  React.useEffect(() => {
    const queries = qs.parse(window.location.search.slice(1));
    if (queries.error) {
      history.replace(window.location.pathname);
      alert(
        [
          `Description: ${queries.error.description}`,
          `At step: ${queries.error.step}`,
          `For reason: ${queries.error.reason}`,
          `Source: ${queries.error.source}`,
          "\nPlease try again later.",
        ].join("\n"),
      );
    }
  }, [history]);

  React.useEffect(() => {
    if (["/login", "/logout", "/signup"].includes(window.location.pathname)) return;

    const cleanupSyncCart = callIfDocReady(() => syncCart());
    return () => {
      if (typeof cleanupSyncCart === "function") cleanupSyncCart();
    };
  }, [syncCart]);

  return (
    <ErrorBoundary>
      <OrderModal />
      <ReactModal
        isOpen={cartOpen}
        className={css("cartContent")}
        overlayClassName={css("cartOverlay")}
        onRequestClose={closeCart}
        onAfterOpen={() => (document.getElementById("scrollBody").style.overflow = "hidden")}
        onAfterClose={() => (document.getElementById("scrollBody").style.overflow = "overlay")}
      >
        <div className={css("cart")}>
          <div className={css("cart__title", "subtitle--poppins")}>
            <button onClick={closeCart} className={css("reset-button", "closeButton")}>
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
                alt="ArrowDown"
                width="24px"
                height="24px"
                style={{ display: "block" }}
              />
            </button>
            <span>Shopping Cart{cartStats.count > 0 && `(${cartStats.count})`}</span>
          </div>
          {!isNaN(cartStats.total) && cartStats.count > 0 ? (
            <>
              <div className={css("window")}>
                <div className={css("window__container", "cart__list")}>
                  <PlaceHolder>
                    <CartCardList />
                  </PlaceHolder>
                </div>
              </div>
              <div className={css("cart__paymentDetails", "details")}>
                <div className={css("details__title", "subtitle--poppins")}>Payment Details</div>
                <div className={css("details__content")}>
                  <div className={css("summary", "textPoppins")}>
                    {!isNaN(cartStats.total) && (
                      <div className={css("summary__row")}>
                        <span>Cart total</span>
                        <span className={css("subtitle--poppins")}>
                          <span className={css("textDMSans")}>₹ </span> {cartStats.total}
                        </span>
                      </div>
                    )}
                    {!isNaN(cartStats.discount) && cartStats.discount > 0 && (
                      <div className={css("summary__row", "textHighlighted")}>
                        <span>
                          Discount&nbsp;
                          {cartStats.coupon.valid && (
                            <span className={css("caption--small")}>
                              ({cartStats.coupon.code}: {cartStats.coupon.description})
                            </span>
                          )}
                        </span>
                        <span>
                          -<span className={css("textDMSans")}>₹ </span> {cartStats.discount}
                        </span>
                      </div>
                    )}
                    <hr className={css("summary__row")} style={{ opacity: 0.1 }} />
                    {!isNaN(cartStats.total) && (
                      <div className={css("summary__row")}>
                        <span className={css("subtitle--poppins")}>Grand Total</span>
                        <span className={css("subtitle--poppins")}>
                          <span className={css("textDMSans")}>₹ </span> {cartStats.total - cartStats.discount}
                        </span>
                      </div>
                    )}
                  </div>
                  <PlaceHolder>
                    <CouponBox />
                  </PlaceHolder>
                </div>
              </div>
              <div className={css("cart__actionBar")}>
                <div className={css("actionItem")}>
                  <span className={css("caption", "textDull")}>Grand total:</span>
                  <br />
                  {!isNaN(cartStats.total) && (
                    <span className={css("subtitle--poppins")}>
                      <span className={css("textDMSans")}>₹ </span> {cartStats.total - cartStats.discount}
                    </span>
                  )}
                </div>
                <button
                  className={css("actionItem", "reset-button", "subtitle--poppins", "button", "button__style--solid")}
                  onClick={userStatus ? showOrder : redirectToLogin}
                >
                  {userStatus ? "Proceed to pay" : "Login"}
                </button>
              </div>
            </>
          ) : (
            <div className={css("emptyCart")}>
              <div style={{ width: "14.8rem", height: "13.2rem" }}>
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/CartEmpty.svg"
                  alt="CartEmpty"
                  width="148px"
                  height="132px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className={css("subtitle--poppins")}>Your cart is empty</p>
              <button
                className={css(
                  "reset-button",
                  "button",
                  "button__style--solid",
                  "button__size--sm",
                  "caption",
                  "textPoppins",
                  "textNormal",
                )}
                onClick={closeCart}
              >
                Keep shopping
              </button>
            </div>
          )}
        </div>
      </ReactModal>
    </ErrorBoundary>
  );
};

export default Cart;

const CouponBox = () => {
  const [cartCoupon, setCartCoupon] = useRecoilState(cartCouponAtom);
  const cartStats = useRecoilValue(cartStatsSelector);
  const cartList = useRecoilValue(cartListAtom);
  const defaultValues = React.useMemo(() => ({ code: "" }), []);
  const {
    Form,
    meta: { isSubmitting, canSubmit, error },
  } = useForm({
    defaultValues: defaultValues,
    onSubmit: async ({ code }, instance) => {
      if (!code || cartList.length === 0) return;

      await handleFormError(instance, async () => {
        const data = { code: code, amount: cartStats.total, entities: cartList };
        const response = await axios.post("/coupons/apply", data);
        if (response.status === 200) {
          const {
            entities,
            discounted_total,
            coupon: { code, description },
          } = response?.data ?? {};

          setCartCoupon({
            code,
            entities,
            description,
            discounted_total,
            valid: !isNaN(discounted_total),
          });
        } else throw response;
      });
    },
    validate: async ({ code }, instance) => {
      const cError = !code.trim();
      if (cError) {
        instance.setFieldMeta("code", { isTouched: false, error: null });
        instance.setMeta({ error: cError });
      }

      return cError ? true : false;
    },
    debugForm: false,
  });

  return (
    <ErrorBoundary>
      <Form className={css("couponBox")}>
        <InputField
          type="text"
          field="code"
          placeholder="Enter Coupon"
          containerClassName={css("couponBox__inputWrapper")}
          className={css("couponBox__input", "paragraph")}
          button={cartCoupon.valid ? "X" : isSubmitting ? "..." : "Apply"}
          buttonClassName={css("couponBox__button", "button__style--stripped")}
          buttonDisabled={!canSubmit}
          buttonOnClick={(event) => {
            if (cartCoupon.valid) {
              event.preventDefault();
              setCartCoupon({ ...cartCoupon, code: "", valid: false, description: "" });
            }
          }}
          disabled={cartCoupon.valid}
          onInput={(e) => {
            const { target } = e;
            const [selectionStart, selectionEnd] = [target.selectionStart, target.selectionEnd];
            target.value = target.value.toUpperCase();
            target.setSelectionRange(selectionStart, selectionEnd);
          }}
        />
        {error && <div>{error}</div>}
      </Form>
    </ErrorBoundary>
  );
};
