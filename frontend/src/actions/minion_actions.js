import * as minionUtil from "../util/minion_util";
export const RECEIVEALLMINIONS = "RECEIVEALLMINIONS";
export const RECEIVEMINION = "RECEIVEMINION";
export const RECEIVEUSERMINIONS = "RECEIVEUSERMINIONS";
export const RECEIVE_MINION_ERRORS = "RECEIVE_MINION_ERRORS";


export const receiveAllMinions = (minions) => ({
  type: RECEIVEALLMINIONS,
  minions
});

export const receiveMinion = minion => ({
    type: RECEIVEMINION,
    minion
});

export const receiveUserMinions = (minions) => ({
  type: RECEIVEUSERMINIONS,
  minions
});

export const receiveErrors = errors => ({
  type: RECEIVE_MINION_ERRORS,
  errors
});


export const fetchMinions = () => dispatch => {
  return minionUtil.fetchMinions().then(
    (minions) => dispatch(receiveAllMinions(minions))
  );
}

export const fetchMinion = (minionId) => dispatch => {
  return minionUtil.fetchMinion(minionId)
  .then((minion) => dispatch(receiveMinion(minion))
  );
}

export const fetchUserMinions = (userId) => dispatch => {
  return minionUtil.fetchUserMinions(userId)
    .then(minions => dispatch(receiveUserMinions(minions))
  );
}

export const createMinion = (minionForm) => dispatch => {
  return minionUtil.createMinion(minionForm)
    .then(minion => dispatch(receiveMinion(minion), errors => dispatch(receiveErrors(errors)))
  );
}

export const deleteMinion = (minionId) => dispatch => {
  return minionUtil.deleteMinion(minionId).then()
}



