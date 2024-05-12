import axios from "axios";

const getFavoriteCities = async () => {
  try {
    const response = await axios.get("http://localhost:8000/favoriteCities");
    const data = response.data;
    const favoriteCities = data.favoriteCities;
    return favoriteCities;
  } catch (error) {
    console.error("Error fetching favorite cities:", error);
    return [];
  }
};
export default getFavoriteCities;
