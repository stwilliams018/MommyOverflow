import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {

    return (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    {!context.token && (
      <li className="nav-item">
      <NavLink className="nav-link" to="/auth">Login</NavLink>
</li>
)}
      <li className="nav-item">
      <NavLink className="nav-link" to="/questions">Questions</NavLink>
      </li>
      {context.token && (
        <React.Fragment>
      <li className="nav-item">
      <NavLink className="nav-link" to="/profile">Profile</NavLink>
    </li>
    <li className="nav-item">
    <button className="btn btn-alert" onClick={context.logout}>Logout</button>
  </li>
  </React.Fragment>
    )}  
    </ul>
  </div>  
</nav>
    );
  }}
</AuthContext.Consumer>
);


  export default mainNavigation;