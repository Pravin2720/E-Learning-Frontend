import { atom, selector } from "recoil";

const loadFromLocalStorage = (key) => {
  return ({ setSelf, trigger }) => {
    if (trigger === "get") setSelf(JSON.parse(localStorage.getItem(key) || "null"));
  };
};

const localStorageEffect = ({ onSet }) => {
  onSet((newValue) => {
    if (newValue !== null && newValue !== undefined) {
      localStorage.setItem("user_data", JSON.stringify(newValue));
    } else {
      localStorage.setItem("user_data", null);
      localStorage.removeItem("user_data");

      localStorage.setItem("user_auth_access_token", null);
      localStorage.removeItem("user_auth_access_token");

      localStorage.setItem("user_auth_refresh_token", null);
      localStorage.removeItem("user_auth_refresh_token");
    }
  });
};

export const userAtom = atom({
  key: "user",
  default: null,
  effects: [localStorageEffect, loadFromLocalStorage("user_data")],
});

export const userStatusSelector = selector({
  key: "userStatus",
  get: ({ get }) => Boolean(get(userAtom)),
});
