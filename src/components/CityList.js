// CityList.js
import React, { useState, useEffect } from 'react';
import CityCard from './CityCard';
import './CityList.css';

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = cities.filter(city =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Tourista</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="city-list">
        {filteredCities.map(city => (
          <CityCard key={city.id} city={city} 
          deleteCity={deleteCity} />
        ))}
      </div>
    </div>
  );
};

export default CityList;
