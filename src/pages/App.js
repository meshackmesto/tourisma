import React from "react";
import "./App.css";
import NavBar from "../components/NavBar";
import Form from "./TravelForm";
import CityList from "../components/CityList";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <CityList />
      </header>
      <Form />
    </div>
  );
}

export default App;
