import { SET_LOADING } from "./type";
import axios from "axios";

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const startSetLoading = (loading) => async (dispatch) => {
  /* Update Redux state */
  dispatch(setLoading(loading));
};
