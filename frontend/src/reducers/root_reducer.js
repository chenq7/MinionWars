import { combineReducers } from "redux";
import session from "./auth/session_reducer";
import errors from "./errors/errors_reducer";
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  ui: uiReducer
});

export default RootReducer;
