import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
import CityList from '../components/CityList';
import TravelForm from './TravelForm';

import FavoriteCityDisplay from './FavoriteCityDisplay';



function App() {
  return (
    <>   
    <header>
    <NavBar />
  </header>
    <main>
      <CityList />
      <TravelForm />
      <FavoriteCityDisplay />
      </main>
    </>
  );
}

export default App;
