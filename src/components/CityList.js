import React, { useState, useEffect } from 'react';
import FavoriteCity from '../FavoriteCity.js';
import CityCard from './CityCard';
import './CityList.css';

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCities(data.cityData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const deleteCity = (id) => {
    setCities(cities.filter(city => city.id !== id));
  };

  const addFavoriteCity = (cityName) => {
    if (!favoriteCities.includes(cityName)) {
      setFavoriteCities([...favoriteCities, cityName]);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = cities.filter(city =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="intro">
      <h1 className="tourisma">Tourisma</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <FavoriteCity addFavoriteCity={addFavoriteCity} />
      <div className="city-list">
        {filteredCities.map(city => (
          <CityCard key={city.id} city={city} deleteCity={deleteCity} addFavoriteCity={addFavoriteCity} />
        ))}
      </div>
    </div>
  );
};

export default CityList;
