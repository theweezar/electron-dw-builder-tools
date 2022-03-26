import { combineReducers } from "redux";

const dwFileReducer = (state = null, action) => {
  return state;
}

export const reducerCombination = combineReducers({
  dwFile: dwFileReducer
});