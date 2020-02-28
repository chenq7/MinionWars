import { combineReducers } from "redux";

import minionReducer from "./minions_reducer";
import userReducer from "./users_reducer";

export default combineReducers({
  users: userReducer,
  minions: minionReducer
});
