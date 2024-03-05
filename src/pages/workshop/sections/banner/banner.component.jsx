import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartListAtom, cartOpenAtom, itemInCartAtomFamily } from "states/cart/cart.atoms";
import { redirectionOpenAtom } from "states/redirection/redirection.atoms";

import { useSyncCart } from "utils/cart.util";

import classnames from "classnames/bind";
import styles from "./banner.module.scss";
const css = classnames.bind(styles);

const Banner = ({ title, long_description, markup_price, offer_price, slug, entity, workshop_date, workshop_time }) => {
  const itemInCart = useRecoilValue(itemInCartAtomFamily({ entity_id: slug, entity_type: entity }));
  const cartItems = useRecoilValue(cartListAtom);
  const syncCart = useSyncCart();
  const setShowCart = useSetRecoilState(cartOpenAtom);
  const setRedirectionModal = useSetRecoilState(redirectionOpenAtom);

  const addToCart = async (e) => {
    if (!itemInCart) {
      e.target.setAttribute("disabled", "disabled");
      await syncCart([...cartItems, { entity_id: slug, entity_type: entity }]);
      e.target.removeAttribute("disabled");
    }
    setShowCart(true);
  };

  return (
    <ErrorBoundary>
      <div className={css("banner")}>
        <div className={css("banner__left")}>
          <div className={css("workshop", "textBold", "textPoppins")}>
            <p className={css("workshop__text")}>
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/StatusOnline.svg"
                alt="live"
                width="32px"
                height="32px"
                className={css("workshop__icon")}
              />
              <span>LIVE WORKSHOP</span>
            </p>
            <p className={css("workshop__datetime")}>
              <span className={css("workshop__datetime--date")}>{workshop_date}</span>
              <span className={css("workshop__datetime--time")}>{workshop_time}</span>
            </p>
          </div>

          <h1 className={css("title2", "banner__title")}>{title}</h1>
          {long_description && <p className={css("subtitle", "textDull", "banner__description")}>{long_description}</p>}

          <div className={css("banner__price")}>
            {!isNaN(offer_price) && (
              <div className={css("title3", "tag__wrapper")}>
                <span className={css("textDMSans")}>₹ </span> {offer_price}
              </div>
            )}
            {markup_price && (
              <div className={css(isNaN(offer_price) ? "title3" : ["subtitle", "textDull", "textLineThrough"])}>
                <span className={css("textDMSans")}>₹ </span> {markup_price}
              </div>
            )}
          </div>
          <div className={css("banner__buttons")}>
            <button
              onClick={() => setRedirectionModal(true) && addToCart()}
              style={{ color: "#fff" }}
              className={css("reset-button", "button", "button__style--solid", "button__size--lg")}
            >
              {itemInCart ? "Already in Cart! Proceed to Payment" : "Add to cart"}
            </button>
            {/* <button className={css("button", "button__style--solid", "button__size--sm")}>Buy Now</button> */}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Banner;
