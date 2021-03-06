import React, { Component } from 'react';
import './Auth.css';


class AuthPage extends Component {
    state = {
        isLogin: true
    };

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






        fetch('http://localhost:8000/graphql', {
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
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="field is-normal" onSubmit={this.submitHandler}>
                <div className="control">
                    <label>Email address:</label>
                    <input type="email" className="input" id="email" ref={this.emailEl} />
                </div>
                <div className="control">
                    <label>Password:</label>
                    <input type="password" className="input" id="password" ref={this.passwordEl} />
                </div>
                <button type="submit" className="button">Submit</button>
                <button type="button" className="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'Signup' : 'Login'}</button>
            </div>);
    }
}

export default AuthPage;