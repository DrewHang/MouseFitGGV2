import { SET_MOUSES } from "../actions/type.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOUSES:
      return action.mouses;
    default:
      return state;
  }
};
