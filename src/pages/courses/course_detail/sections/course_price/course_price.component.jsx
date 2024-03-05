import React from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartListAtom, cartOpenAtom, itemInCartAtomFamily } from "states/cart/cart.atoms";
import { redirectionOpenAtom } from "states/redirection/redirection.atoms";

import { useSyncCart } from "utils/cart.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./course_price.module.scss";
const css = classnames.bind(styles);

const CoursePrice = ({
  markup_price,
  offer_price,
  slug,
  entity,
  pre_launch,
  pre_launch_date,
  refund_policy,
  workshop,
}) => {
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
      <div className={css("price")}>
        {!isNaN(offer_price) && (
          <div className={css("title3", "tag__wrapper")}>
            <span className={css("textDMSans")}>₹ </span> {offer_price}
            {pre_launch && <span className={css("caption", "tag")}> (Pre-launch price)</span>}
            {workshop && <span className={css("caption", "tag")}>Live Workshop + Course Combo:</span>}
          </div>
        )}
        {markup_price && (
          <div className={css(isNaN(offer_price) ? "title3" : ["subtitle", "textDull", "textLineThrough"])}>
            <span className={css("textDMSans")}>₹ </span> {markup_price}
          </div>
        )}
      </div>
      <div className={css("buttons")}>
        <button
          onClick={() => setRedirectionModal(true) && addToCart()}
          style={{ color: "#fff" }}
          className={css(
            "reset-button",
            "button",
            pre_launch ? "button__style--solid" : "button__style--outlined",
            "button__size--sm",
          )}
        >
          {itemInCart ? "Already in Cart! Proceed to Payment" : "Add to cart"}
        </button>
        {/* <button className={css("button", "button__style--solid", "button__size--sm")}>Buy Now</button> */}
      </div>
      {refund_policy && (
        <span className={css("caption")} style={{ textAlign: "center" }}>
          No questions asked 3 day refund policy
        </span>
      )}
      {pre_launch_date && (
        <span className={css("caption")} style={{ textAlign: "center" }}>
          The course will be visible after the launch date <div>{pre_launch_date}.</div>
        </span>
      )}
    </ErrorBoundary>
  );
};

export default CoursePrice;
