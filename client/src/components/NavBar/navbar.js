import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <nav className="navbar">
        <div className="navbar-brand">
            Mommy Overflow
        </div>
      <ul className="navbar-end">
        <li className="navbar-item">
          <Link to="/" className={window.location.pathname === "/" ? "navbar-link active" : "navbar-link"}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className={window.location.pathname === "/profile" ? "navbar-link active" : "navbar-link"}>
            Profile
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className={window.location.pathname === "/login" ? "navbar-link active" : "navbar-link"}>
            Login
          </Link>
        </li>
      </ul>
      </nav>
    );
  }

export default NavBar;

