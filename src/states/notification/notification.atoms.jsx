import { atom } from "recoil";
import { sessionStorageEffect } from "states/utils";

// maintain notification Closed status
export const notificationClosedAtom = atom({
  key: "notificationClosed",
  default: JSON.parse(sessionStorage.getItem("notificationClosed") || "false"),
  effects: [sessionStorageEffect("notificationClosed")],
});
