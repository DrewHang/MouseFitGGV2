import { SET_MOUSE } from "../actions/type.js";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOUSE:
      return action.mouse;
    default:
      return state;
  }
};
