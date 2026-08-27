import axios from "axios";

const API_GIPHY_URL = import.meta.env.VITE_GIPHY_URL;

export const getGifByQuery = async (query) => {
  const response = await axios.get(API_GIPHY_URL, {
    params: {
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      q: query,
      limit: 20,
    },
  });

  return response.data.data;
};
