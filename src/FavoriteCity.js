import React, { useState } from 'react';

function FavoriteCity() {
  const [favoriteCity, setFavoriteCity] = useState('');
  const [message, setMessage] = useState('');

  const handleAddFavorite = () => {
    if (favoriteCity.trim() === '') {
      setMessage('Please enter a city name');
      return;
    }

    
    
    console.log('Favorite city added:', favoriteCity);

    
    setFavoriteCity('');
    setMessage('Favorite city added successfully');
  };

  return (
    <div>
      <h2>Add Favorite City</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={favoriteCity}
        onChange={(e) => setFavoriteCity(e.target.value)}
      />
      <button onClick={handleAddFavorite}>Add Favorite</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FavoriteCity;
