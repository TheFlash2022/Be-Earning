import { combineReducers, createStore } from "redux";
import { arrReducer } from "./reducers/arrReducer";

export const rootReducer = combineReducers({
  // store app
  arrReducer,
});

export const store = createStore(rootReducer);
