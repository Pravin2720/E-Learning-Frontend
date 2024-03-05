import { atom } from "recoil";
import { sessionStorageEffect } from "states/utils";

const loadFromSessionStorage = (key, defValue) => {
  return ({ setSelf, trigger }) => {
    if (trigger === "get") setSelf(JSON.parse(sessionStorage.getItem(key) || "null") ?? defValue);
  };
};

// maintain redirection modal status
export const redirectionOpenAtom = atom({
  key: "redirectionOpen",
  default: true,
  effects: [sessionStorageEffect("redirection"), loadFromSessionStorage("redirection", true)],
});
