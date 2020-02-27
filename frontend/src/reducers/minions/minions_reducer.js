import {
  RECEIVEALLMINIONS,
  RECIEVEMINION,
  RECEIVEUSERMINIONS
} from "../../actions/minion_actions";
import merge from "lodash/merge";

const minionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVEALLMINIONS:
      return action.minions;
    case RECIEVEMINION:
      let newState = merge({}, state, action.minion);
      return newState;
    case RECEIVEUSERMINIONS:
      newState = merge({}, state, action.minions)
      return newState
    default:
      return state;
  }
};

export default minionReducer;
