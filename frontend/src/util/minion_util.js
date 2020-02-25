
export const createMinion = minionData => {
  return axios.post("/api/minions/create", minionData);
};
