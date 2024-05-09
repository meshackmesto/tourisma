import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
import CityList from '../components/CityList';
import TravelForm from './TravelForm';
import FavoriteCityDisplay from './FavoriteCityDisplay';


function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <CityList />
      <TravelForm />
      <FavoriteCityDisplay />
    </div>
  )
}

export default App;
