import axios from "axios";

export const gerFavorites = async (id) => {
  const res = await axios.get(`http://localhost:5000/api/getFavorites/${id}`, {
    withCredentials: true,
  });
  const data = await res.data;
  return data.favorites;
};
