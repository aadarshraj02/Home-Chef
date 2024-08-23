import axios from "axios";

export const getFavorites = async (id) => {
  const res = await axios.get(`http://localhost:5000/api/getFavorites/${id}`, {
    withCredentials: true,
  });
  const data = await res.data;
  return data.favorites;
};
