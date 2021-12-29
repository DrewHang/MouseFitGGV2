import { atom } from "recoil";

export const surveyState = atom({
  key: "surveyState",
  default: false,
});

export const surveyNumber = atom({
  key: "surveyNumber",
  default: 0,
});

export const currentFilter = atom({
  key: "currentFilter",
  default: [],
});

export const itemSelected = atom({
  key: "itemSelected",
  default: false,
});
