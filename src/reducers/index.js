import * as ActionTypes from "../actions";
import merge from "lodash/merge";
import { combineReducers } from "redux";

const quote = (state = { isFetching: false, text: "", author: "" }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
};

const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

const rootReducer = combineReducers({
  quote,
  errorMessage,
});

export default rootReducer;
