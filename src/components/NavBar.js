import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo_image/logo.png";
import "./NavBar.css";

function NavBar({ logout }) {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} alt="Tourisma logo" />
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/FavouriteCityDisplay" className="nav-link">
          Favorite
        </NavLink>
        <NavLink to="/TravelForm" className="nav-link">
          Visit
        </NavLink>

        <p className="logout" onClick={logout}>
          Log Out
        </p>
      </nav>
    </>
  );
}

export default NavBar;
