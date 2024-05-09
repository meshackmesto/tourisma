import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
import CityList from '../components/CityList';




function App() {
  return (
    <>   
    <header>
    <NavBar />
  </header>
    <main>
      <CityList />
      </main>
    </>
  );
}

export default App;
