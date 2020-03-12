import * as userUtil from "../util/user_util";

export const RECEIVEALLUSERS = "RECEIVEALLUSERS";
export const UPDATEUSER = "UPDATEUSER"

export const receiveAllUsers = users => ({
  type: RECEIVEALLUSERS,
  users
});


export const fetchUsers = () => dispatch => {
  return userUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)));
};

export const updateUser = (userData) => dispatch => {
  return userUtil.updateUser(userData)
    .then();
}