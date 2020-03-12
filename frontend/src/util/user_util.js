import axios from "axios";

export const fetchUsers = () => {
  return axios.get("api/users");
};

export const updateUser = (userData) => {
  return axios({
    method: 'patch',
    url: `api/users/${userData._id}`,
    data: {
      coins: userData.coins
    }
  });
};