import { atomFamily, selectorFamily } from "recoil";

export const loaderAtomFamily = atomFamily({
  key: "loader",
  default: { progress: 0, total: 0, isVisible: false },
});

export const loaderRegisterSelectorFamily = selectorFamily({
  key: "loaderRegister",
  get:
    (id) =>
    ({ get }) =>
      get(loaderAtomFamily(id)).total,
  set:
    (id) =>
    ({ set }) =>
      set(loaderAtomFamily(id), (prevValue) => ({ ...prevValue, isVisible: true, total: prevValue.total + 1 })),
});

export const loaderReportSelectorFamily = selectorFamily({
  key: "loaderReport",
  get:
    (id) =>
    ({ get }) =>
      get(loaderAtomFamily(id)).progress,
  set:
    (id) =>
    ({ set }) =>
      set(loaderAtomFamily(id), (prevValue) => ({ ...prevValue, isVisible: true, progress: prevValue.progress + 1 })),
});
