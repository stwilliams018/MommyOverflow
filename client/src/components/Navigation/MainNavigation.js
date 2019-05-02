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
                <NavLink className="navbar-item" to="/Home">Home</NavLink>                
                <NavLink className="navbar-item" to="/Questions">Questions</NavLink>                
                <NavLink className="navbar-item" to="/Profile">Profile</NavLink>
                <NavLink className="navbar-item" to="/Auth">Login</NavLink>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                                Account
                            </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                    Dashboard
                                </a>
                            <a className="navbar-item">
                                    Profile
                                </a>
                            <a className="navbar-item">
                                    Settings
                                </a>
                            <hr className="navbar-divider" />
                            <div className="navbar-item">
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>
    
  );
}
export default mainNavigation;