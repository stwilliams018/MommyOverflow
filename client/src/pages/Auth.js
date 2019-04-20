import React, { Component } from 'react';
import './Auth.css';
import AuthContext from '../context/auth-context';

class AuthPage extends Component {
    state = {
        isLogin: true
      };

      static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
      }

    switchModeHandler = () => {
        this.setState(prevState => {
          return { isLogin: !prevState.isLogin };
        });
      };

    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        let requestBody = {
            query: `
            query {
                login(email:"${email}",password:"${password}") {
                    userId
                    token
                    tokenExpiration
                }
            }
            `
        };

        if (!this.state.isLogin) {
            requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {email:"${email}",password:"${password}"}) {
                            _id
                            email
                        }
                    }
                `
            };
        }

        

        


        fetch('http://localhost:5000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData => {
              console.log(resData.data.login.token);
              
                if (resData.data.login.token) {
                    this.context.login(
                        resData.data.login.token, 
                        resData.data.login.userId,
                        resData.data.login.tokenExpiration
                    );
                    localStorage.setItem('token', resData.data.login.token);
                }
                
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form onSubmit={this.submitHandler}>
              <div className="form-label-group">
              <input type="email" className="form-control" id="email" ref={this.emailEl} />
                <label htmlFor="inputEmail">Email address</label>
              </div>
              <div className="form-label-group">
              <input type="password" className="form-control" id="password" ref={this.passwordEl} />
                <label htmlFor="inputPassword">Password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">{this.state.isLogin ? 'Login' : 'Sign Up'}</button>
              <hr className="my-4" />
            <button type="button" className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'Signup' : 'Login'}</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>);
    }
}

export default AuthPage;