import { atom, atomFamily, selector, selectorFamily } from "recoil";

import { sessionStorageEffect } from "states/utils";

import MockData from "data/index";

// maintain cart drawer status
export const cartOpenAtom = atom({ key: "cartOpen", default: false });

// maintain cart items
export const cartListAtom = atom({
  key: "cartList",
  default: [],
  effects: [sessionStorageEffect("cart")],
});

// whether the item is added to cart
export const itemInCartAtomFamily = atomFamily({
  key: "itemInCart",
  default: selectorFamily({
    key: "itemInCart/Default",
    get: ({ entity_id, entity_type }) => {
      return ({ get }) => {
        const list = get(cartListAtom);
        const exists = list.filter((v) => v.entity_id === entity_id && v.entity_type === entity_type);
        return exists.length > 0;
      };
    },
  }),
});

export const cartCouponAtom = atom({
  key: "cartCoupon",
  default: { code: "", description: "", discounted_total: NaN, valid: false },
});

// maintain statistical summary of items in cart
export const cartStatsSelector = selector({
  key: "cartStats",
  get: ({ get }) => {
    const list = get(cartListAtom);
    const coupon = get(cartCouponAtom);

    let count = 0;
    let total = 0;
    let discount = 0;

    if (!Array.isArray(list)) return { count, total, discount, coupon };

    for (const item of list) {
      if (!item.entity_id) continue;

      let data = null;
      switch (item.entity_type) {
        case "bundle":
          data = MockData.bundles[item.entity_id];
          break;
        case "course":
          data = MockData.courses[item.entity_id];
          break;
        case "workshop":
          data = MockData.workshops[item.entity_id];
          break;

        default:
          break;
      }

      if (!data) continue;
      count += 1;
      total += parseInt(data.markup_price);
      if (!isNaN(data.offer_price)) {
        discount += parseInt(data.markup_price) - (parseInt(data.offer_price) ?? parseInt(data.markup_price));
      }
    }

    if (coupon.code && coupon.valid) {
      discount = total - coupon.discounted_total;
    }

    return { count, total, discount, coupon };
  },
});
