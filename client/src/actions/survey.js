import { SET_SURVEY } from "./type";
import axios from "axios";

export const setSurvey = (survey) => ({
  type: SET_SURVEY,
  survey,
});

export const startSetSurvey = (survey) => async (dispatch) => {
  /* Update Redux state */
  dispatch(setSurvey(survey));
};
