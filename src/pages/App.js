import React from'react';
import './App.css';
import NavBar from '../components/NavBar';
import TravelForm from './TravelForm';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <TravelForm />
    </div>
  )
}

export default App;
