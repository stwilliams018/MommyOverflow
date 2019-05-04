import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;
        return (
            <div>
                <div className="register">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <h1 className="display-4 text-center">Register</h1>
                            <p className="lead text-center">Create your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="field">
                                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="name"
                  placeholder="Name"
                  className={classnames("input", {
                    invalid: errors.name || errors.namenotfound
                  })}
                />
                                </div>
                                <div className="field">
                                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("input", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                                </div>
                                <div className="field">
                                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("input", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                                </div>
                                <div className="field">
                                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  className={classnames("input")}
                />
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                    <button
                  
                  type="submit"
                  className="button is-success"
                >
                  Sign Up
                </button>
                                    </div>
                                    <div className="control">
                                    Already a member? <Link to="/register" className="">Sign In</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                    
                </div>
            </div >
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));