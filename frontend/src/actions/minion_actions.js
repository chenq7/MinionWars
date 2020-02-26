import * as minionUtil from "../util/minion_util";



export const RECEIVEALLMINIONS = "RECEIVEALLMINIONS";
export const RECIEVEMINION = "RECIEVEMINION";


export const receiveAllMinions = (minions) => ({
  type: RECEIVEALLMINIONS,
  minions
});

export const receiveMinion = minion => ({
    type: RECIEVEMINION,
    minion
});




export const fetchMinions = () => dispatch => {
  return minionUtil.fetchMinions().then(
    (minions) => dispatch(receiveAllMinions(minions))
  );
}

export const fetchMinion = (minionId) => dispatch =>
         minionUtil.fetchMinion(minionId).then((minion) => dispatch(receiveMinion(minion)));






