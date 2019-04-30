import React, { Component } from 'react'
//import axios from 'axios';
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



        /*     axios
                .post('/api/users/login', user)
                .then(res => console.log(res.data))
                .catch(err => this.setState({ errors: err.response.data }));
            console.log(user); */
    }


    render() {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                                <Link to="/logout">logout</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
