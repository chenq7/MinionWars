import { RECEIVEALLUSERS } from "../../actions/user_actions";
import merge from "lodash/merge";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVEALLUSERS:
      return action.users;
    default:
      return state;
  }
};

export default userReducer;
