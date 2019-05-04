import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setauthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import NoMatch from "./pages/NoMatch";
import ProfilePage from './pages/Profile';
import Questions from "./pages/Questions";
import Question from "./pages/Question";
import PrivateRoute from "./components/private-route/PrivateRoute";
import MainNavigation from './components/Navigation/MainNavigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';


import './App.css';

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main>
            <Switch>
              <Redirect from="/" to="/questions" exact />
              <Route exact path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/logout" component={Logout} />
              <Route path="/Home" component={HomePage} />
              <PrivateRoute path="/Profile" component={ProfilePage} />
              <Route exact path="/questions/:id" component={Question} />
              <Route exact path="/questions" component={Questions} />

            </Switch>
          </main>
        </React.Fragment>

      </BrowserRouter>
      </Provider>
    );
  }
}



export default App;
