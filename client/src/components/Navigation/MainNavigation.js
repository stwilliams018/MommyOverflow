import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';
import Icon from "../images/icon.png";

class mainNavigation extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
          
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
          
              // Add a click event on each of them
              $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
          
                  // Get the target from the "data-target" attribute
                  const target = el.dataset.target;
                  const $target = document.getElementById(target);
          
                  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                  el.classList.toggle('is-active');
                  $target.classList.toggle('is-active');
          
                });
              });
            }
          
          });
        const { user } = this.props.auth;
        console.log(this.props.auth.isAuthenticated);
        if (!this.props.auth.isAuthenticated) {
            return (
                <div>
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="../">
                                    <img src={Icon} alt="Logo" height="150" width="75" />
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
                                    <NavLink className="navbar-item" to="/Questions">Questions</NavLink>                
                                    <NavLink className="navbar-item" to="/Profile">Profile</NavLink>
                                    <NavLink className="navbar-item" to="/login">Login</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }
        else {
            return (
                <div>
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="../">
                                    <img src={Icon} alt="Logo" height="150" width="75" />
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
                                    <NavLink className="navbar-item" to="/Questions">Questions</NavLink>                
                                    <NavLink className="navbar-item" to="/Profile">Profile</NavLink>
                                    <NavLink className="navbar-item" onClick={this.onLogoutClick} to="/logout">Logout</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
    );
        }
    }
}
mainNavigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(mainNavigation);