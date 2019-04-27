import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';


function mainNavigation() {
  return (

    <div >


      <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <h1 className="title is-2">MommyOverflow</h1>
          </a>
        </div>

        <div className="navbar-end">
          <button className="navbar-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </button>
          <button className="navbar-item">
            <NavLink className="nav-link" to="/register">Sign Up</NavLink>
          </button>
          <button className="navbar-item">
            <NavLink className="nav-link" to="/Home">Home</NavLink>
          </button>
          <button className="navbar-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </button>
        </div>
      </nav>
    </div>

  );
}
export default mainNavigation;