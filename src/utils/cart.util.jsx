import React from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { cartCouponAtom, cartListAtom } from "states/cart/cart.atoms";
import { userStatusSelector } from "states/user/user.atoms";
import axios from "utils/axios.util";

export const useSyncCart = () => {
  const setCartItems = useSetRecoilState(cartListAtom);
  const resetCartCoupon = useResetRecoilState(cartCouponAtom);
  const userStatus = useRecoilValue(userStatusSelector);

  return React.useCallback(
    async (newValue = null) => {
      if (newValue) {
        // setter
        if (userStatus) {
          const response = await axios.put("/cart", { items: newValue });
          if (response.status === 200) {
            setCartItems(response.data.items);
          } else {
            console.error("cart put response has returned non-200 status", response);
          }
        } else {
          setCartItems(newValue);
        }
      } else {
        // getter
        let items = JSON.parse(sessionStorage.getItem("cart") || "null");
        if (userStatus) {
          const response = await axios.get("/cart");
          if (response.status === 200) {
            items = response.data?.items;
          } else {
            console.error("cart get response has returned non-200 status", response);
          }
        }
        setCartItems(items || []);
      }
      resetCartCoupon();
    },
    [resetCartCoupon, setCartItems, userStatus],
  );
};
