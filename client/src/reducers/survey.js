import { SET_SURVEY } from "../actions/type";

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SURVEY:
      return action.survey;
    default:
      return state;
  }
};
