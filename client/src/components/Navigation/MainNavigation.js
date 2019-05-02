import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';
import Icon from "../images/url-baby.png";

function mainNavigation() {
  return (

    <div >


    <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="../">
                        <img src={Icon} alt="Logo" height="200" width="75" />
                    </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                <span></span>
                <span></span>
                </span>
            </div>
            

            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">                
                <NavLink className="navbar-item" to="/Questions">Home</NavLink>                
                <NavLink className="navbar-item" to="/Profile">Profile</NavLink>
                <NavLink className="navbar-item" to="/login">Login</NavLink>
                </div>
            </div>
        </div>
    </nav>
    </div>
    
  );
}
export default mainNavigation;