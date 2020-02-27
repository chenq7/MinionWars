import { RECEIVE_MINION_ERRORS } from '../../actions/minion_actions';


const _nullErrors = [];

const MinionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MINION_ERRORS:
      
      return action.errors;
    default:
      return state;
  }
};

export default MinionErrorsReducer;
