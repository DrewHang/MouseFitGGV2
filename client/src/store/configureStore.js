import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mousesReducer from "../reducers/mouses";
import loadingReducer from "../reducers/loading";
import surveyReducer from "../reducers/survey";
import filteredMouseReducer from "../reducers/filteredMouse";
import mouseReducer from "../reducers/mouse";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      mouses: mousesReducer,
      loading: loadingReducer,
      survey: surveyReducer,
      filteredMouse: filteredMouseReducer,
      mouse: mouseReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
