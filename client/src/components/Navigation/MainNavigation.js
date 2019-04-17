import React from 'react';
import {NavLink } from 'react-router-dom';
import './MainNavigation.css';
const mainNavigation = props => (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink className="nav-link" to="/auth">Authenticate</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/events">Events</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/cards">Cards</NavLink>
      </li>    
    </ul>
  </div>  
</nav>
  );
  
  export default mainNavigation;