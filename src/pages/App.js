import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
main
import CityList from '../components/CityList';
import TravelForm from './TravelForm';
main

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
