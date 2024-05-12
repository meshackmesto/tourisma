import React, { useState } from "react";
import "./CityList.css";

const CityCard = ({ city, deleteCity, addFavoriteCity }) => {
  const [rating, setRating] = useState(city.rating || 0);

  const handleAddFavorites = () => {
    addFavoriteCity(city);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star filled" : "star"}
          onClick={() => handleRatingChange(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="city-card">
      <img src={city.image} alt={city.city} />
      <h2>{city.city}</h2>
      <p>{city.info}</p>
      <div className="star-rating">{renderStars()}</div>
      <div className="fav">
        <span>
          <button onClick={() => deleteCity(city.id)}>Delete</button>
        </span>
        <span>
          <button onClick={() => handleAddFavorites(city.city)}>
            Add to Favorites
          </button>
        </span>
      </div>
    </div>
  );
};

export default CityCard;
