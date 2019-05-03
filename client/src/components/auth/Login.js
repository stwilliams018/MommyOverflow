import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //name: '',
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state



        /* axios
            .post('/api/users/login', user)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }));
        console.log(user); */
    }


    render() {
        return (

            <div>
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="field">
                                    <input type="email" className="input" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                                </div>
                                <div className="field">
                                    <input type="password" className="input" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                    <input type="submit" className="button is-success" />
                                    </div>
                                    <div className="control">
                                    <Link to="/logout" className="button is-danger">Logout</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
