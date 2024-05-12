import React, { useState, useEffect } from "react";

import CityCard from "./CityCard";
import "./CityList.css";

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCities(data.cityData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  const addFavoriteCity = async (cityName) => {
    if (!favoriteCities.includes(cityName)) {
      const updatedFavorites = [...favoriteCities, cityName];

      setFavoriteCities(updatedFavorites);

      try {
        const response = await fetch("http://localhost:8000/favoriteCities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ favoriteCities: updatedFavorites, cityName }),
        });

        if (!response.ok) {
          throw new Error("Failed to add favorite city");
        } else {
          setNotification("Added to favorites");
        }

        const dataResponse = await fetch("/db.json");
        if (!dataResponse.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await dataResponse.json();

        setFavoriteCities(data.favoriteCities || []);
      } catch (error) {
        console.error("Error adding favorite city:", error);
      }
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (filteredCities.length === 0 && searchTerm !== "") {
      setNotification("Sorry, City not found");
    } else {
      setNotification("");
    }
  };
  const filteredCities = cities.filter((city) =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="intro">
      <h1 className="tourisma">Tourisma</h1>
      <div className="search-bar">
        <button className="btnsrch">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className="inptsrch"
          placeholder="Search city..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="city-list">
        {filteredCities.length === 0 && searchTerm !== "" ? (
          <p className="nott">{notification}</p>
        ) : (
          filteredCities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              deleteCity={deleteCity}
              addFavoriteCity={addFavoriteCity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CityList;
