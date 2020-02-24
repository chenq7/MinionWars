import { combineReducers } from "redux";
import session from "./auth/session_reducer";
import errors from "./errors/errors_reducer";


const RootReducer = combineReducers({
  errors,
  session,
});

export default RootReducer;
