import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
import CityList from '../components/CityList';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <CityList />
      </header>
    </div>
  )
}

export default App;
