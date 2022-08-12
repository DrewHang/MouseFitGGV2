import { SET_LOADING } from "../actions/type";

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
};
