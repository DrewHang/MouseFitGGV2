import { SET_FILTERED_MOUSES } from "./type";
import axios from "axios";

export const setFilteredMouses = (filteredMouse) => ({
  type: SET_FILTERED_MOUSES,
  filteredMouse,
});

export const startSetFilteredMouses = (data) => async (dispatch) => {
  // Update Redux state
  dispatch(setFilteredMouses(data));

  return data;
};
