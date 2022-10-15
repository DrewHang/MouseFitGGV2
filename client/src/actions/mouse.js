import { SET_MOUSE } from "./type";
import axios from "axios";

export const setMouse = (mouse) => ({
  type: SET_MOUSE,
  mouse,
});

export const startSetMouse = (mouse) => async (dispatch) => {
  /* Update Redux state */
  dispatch(setMouse(mouse));
};
