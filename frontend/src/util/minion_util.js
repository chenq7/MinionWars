import axios from "axios";



export const createMinion = minionData => {
  
  return axios.post("api/minions/create", minionData);
};


export const fetchMinions = () => {
  return axios.get('api/minions')
}


export const fetchMinion = (minionId) => {
  return axios.get(`api/minion/${minionId}`)
}


export const fetchUserMinions = (userId) => {
  return axios.get(`api/minions/user/${userId}`)
};