import { combineReducers } from "redux";
import session from "./auth/session_reducer";
import errors from "./errors/errors_reducer";
import ui from './ui_reducer';
import minions from './minions/minions_reducer';

const RootReducer = combineReducers({
  minions,
  session,
  ui,
  errors
});

export default RootReducer;
