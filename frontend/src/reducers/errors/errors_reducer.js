import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import MinionErrorsReducer from "./minion_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  minion: MinionErrorsReducer
});
