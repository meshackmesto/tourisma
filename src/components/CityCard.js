
import React, { useState } from 'react';
import './CityList.css';


const CityCard = ({ city, deleteCity }) => {
  const [rating, setRating] = useState(city.rating || 0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // Here you can implement logic to save the rating to the backend or wherever it needs to be stored
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'star filled' : 'star'}
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
      <div className="star-rating">
        {renderStars()}
      </div>
      <button onClick={() => deleteCity(city.id)}>Delete</button>
      
    </div>
  );
};

export default CityCard;
