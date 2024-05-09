import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
import CityList from '../components/CityList';
import TravelForm from './TravelForm';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <CityList />
      </header>
      <TravelForm />
    </div>
  )
}

export default App;
