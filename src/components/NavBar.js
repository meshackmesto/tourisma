import React from 'react';
import { NavLink } from'react-router-dom';
import "./NavBar.css";
import logo from './logo_image/logo.png';



function NavBar(){
    return (
        <div className='navbar'>
        <nav>
            <img className='logo'
            src={logo} alt='Tourisma logo'/>
            <NavLink 
            to="/"
            className="nav-link"
            >
                Home
            </NavLink>
            <NavLink 
            to="/login"
            className="nav-link"
            >
                Login
            </NavLink>
            <NavLink 
            to= "/sign-up"
            className="nav-link"
            >
                sign-up
            </NavLink>
            <NavLink 
            to= "/FavouriteCityDislpay"
            className="nav-link"
            >
                favourite
            </NavLink>
            <NavLink 
            to= "/TravelForm"
            className="nav-link"
            >
                visit
            </NavLink>
        </nav>
        <div className='searchBox'> 
        <input type='text' placeholder='Search'></input>
        </div>
        </div>
    );
};

export default NavBar;
