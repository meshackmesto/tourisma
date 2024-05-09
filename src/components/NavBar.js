import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo_image/logo.png';
import "./NavBar.css";

function NavBar(){
    return (
        <div className='navbar'>
            <nav>
                <img className='logo' src={logo} alt='Tourisma logo'/>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/login" className="nav-link">Login</NavLink>
                <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
                <NavLink to="/favouriteCityDisplay" className="nav-link">Favorite</NavLink>
                <NavLink to="/TravelForm" className="nav-link">Visit</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;
