import React, { useState } from 'react';
import NavBar from '../components/NavBar';

function FavoriteCityDisplay() {
  const [favoriteCity, setFavoriteCity] = useState('');

  
  const fetchFavoriteCity = () => {
    const storedFavoriteCity = ''; 
    setFavoriteCity(storedFavoriteCity);
  };

  useState(() => {
    fetchFavoriteCity();
  }, []);

  return (
    <>
     <header>
      <NavBar />
    </header>
    <div>
      <h2>Favorite City</h2>
      {favoriteCity ? (
        <p>Your favorite city is: {favoriteCity}</p>
      ) : (
        <p>No favorite city set yet</p>
      )}
    </div>
    </>
  );
}

export default FavoriteCityDisplay;
