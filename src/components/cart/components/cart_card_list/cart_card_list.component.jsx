import React from "react";
import { useRecoilValue } from "recoil";
import { cartCouponAtom, cartListAtom } from "states/cart/cart.atoms";

import { useSyncCart } from "utils/cart.util";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import MockData from "data/index";

import classnames from "classnames/bind";
import styles from "./cart_card_list.module.scss";
const css = classnames.bind(styles);

const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const CartCourseCard = ({
  isBundle,
  image_url,
  title,
  short_description,
  markup_price,
  offer_price,
  coupon_code,
  coupon_applicable,
  discounted_price,
  discount,
  itemLink,
  deleteItem,
}) => {
  return (
    <ErrorBoundary>
      <div className={css("card", isBundle ? "card--bundle" : "card--course")}>
        <div className={css("card__row", "card__top")}>
          {/* logo */}
          <div className={css("card__icon")}>
            <div className={css("imageWrapper", "imageWrapper__centered")}>
              <Link navigateTo={itemLink} className={css("reset-link")}>
                <img
                  srcSet={image_url}
                  width="174px"
                  height="130px"
                  className={css({ "image--portrait": image_url })}
                  alt="course icon"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className={css("card__content")}>
            <div className={css("row")}>
              {/* title */}
              <h4 className={css("paragraph", "textPoppins")}>{title}</h4>
              <button
                className={css("reset-button")}
                onClick={deleteItem}
                style={{ width: "2.4rem", height: "2.4rem" }}
              >
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Trash.svg"
                  alt="Trash"
                  width="24px"
                  height="24px"
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </div>
            {/* description */}
            <div className={css("caption", "description", "textDull")}>{short_description}</div>
          </div>
        </div>
        <div className={css("card__row")}>
          {/* course pricing */}
          <div className={css("price")}>
            {(coupon_applicable || discount) && (
              <div className={css("price__discountPercentage")}>
                <span className={css("caption")}>{coupon_applicable ? coupon_code : `${discount}% off`}</span>
              </div>
            )}
            {(coupon_applicable ? discounted_price : offer_price) && (
              <p className={css("caption", "text__lineThrough")}>
                <span className={css("textDMSans")}>₹ </span> {markup_price}
              </p>
            )}
            <h4 className={css("subtitle--poppins")}>
              <span className={css("textDMSans")}>₹ </span>
              {Math.round((coupon_applicable ? discounted_price : offer_price ?? markup_price) * 100) / 100}
            </h4>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const CartCardList = () => {
  const cartItems = useRecoilValue(cartListAtom);
  const cartCoupon = useRecoilValue(cartCouponAtom);
  const syncCart = useSyncCart();
  const deleteItem = async (index) => await syncCart([...cartItems.slice(0, index), ...cartItems.slice(index + 1)]);

  return (
    <div className={css("cards")}>
      {cartItems.length > 0 &&
        cartItems.map((item, index) => {
          let data = null;
          const { entity_type, entity_id } = item;
          switch (entity_type) {
            case "bundle":
              data = MockData.bundles[entity_id];
              break;
            case "course":
              data = MockData.courses[entity_id];
              break;
            case "workshop":
              data = MockData.workshops[entity_id];
              break;

            default:
              break;
          }
          const { isBundle, image_url, title, short_description, markup_price, offer_price, discount, itemLink } = data;
          data = { isBundle, image_url, title, short_description, markup_price, offer_price, discount, itemLink };
          if (cartCoupon.valid) {
            const meta = cartCoupon.entities.filter((e) => e.entity_type === entity_type && e.entity_id === entity_id);
            data = { ...data, coupon_code: cartCoupon.code, ...meta[0] };
          }
          return (
            <CartCourseCard
              key={`${entity_type}|${entity_id}|${index}`}
              {...data}
              deleteItem={() => deleteItem(index)}
            />
          );
        })}
    </div>
  );
};

export default CartCardList;
