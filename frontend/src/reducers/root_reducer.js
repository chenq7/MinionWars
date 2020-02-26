import { combineReducers } from "redux";
import session from "./auth/session_reducer";
import errors from "./errors/errors_reducer";
import uiReducer from './ui_reducer';
import minions from './minions/minions_reducer';

const RootReducer = combineReducers({
  errors,
  minions,
  session,
  ui: uiReducer
});

export default RootReducer;
