import React, { useState, useEffect } from "react";
import getFavoriteCities from "../FavoriteCity";

function FavoriteCityDisplay() {
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    const fetchFavoriteCities = async () => {
      const cities = await getFavoriteCities();
      setFavoriteCities(cities);
    };

    fetchFavoriteCities();
  }, []);

  const removeFromFavorites = (cityId) => {
    const updatedFavorites = favoriteCities.filter(
      (city) => city.id !== cityId
    );
    setFavoriteCities(updatedFavorites);
  };

  return (
    <div>
      <h2>Favorite Cities</h2>
      {favoriteCities && favoriteCities.length > 0 ? (
        <ul>
          {favoriteCities.map((city) => (
            <li key={city.id}>
              {city.name}
              <button onClick={() => removeFromFavorites(city.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite cities found.</p>
      )}
    </div>
  );
}

export default FavoriteCityDisplay;
