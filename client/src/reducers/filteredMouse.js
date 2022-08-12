import { SET_FILTERED_MOUSES } from "../actions/type.js";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERED_MOUSES:
      return action.filteredMouse;
    default:
      return state;
  }
};
