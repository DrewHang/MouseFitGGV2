import { SET_MOUSES } from "./type";
import axios from "axios";

export const setMouses = (mouses) => ({
  type: SET_MOUSES,
  mouses,
});

export const startGetMouses = () => async (dispatch) => {
  const result = await axios
    .get(`${process.env.REACT_APP_API_URL}/api/mouses`)
    .catch((err) => {
      console.log("err", err);
    });
  const {
    data: { data },
  } = result;

  return data;
};

export const startSetMouses = () => async (dispatch) => {
  const result = await axios
    .get(`${process.env.REACT_APP_API_URL}/api/mouses`)
    .catch((err) => {
      console.log("err", err);
    });
  const {
    data: { data },
  } = result;

  // Update Redux state
  dispatch(setMouses(data));

  return data;
};
