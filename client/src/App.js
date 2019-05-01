import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import NoMatch from "./pages/NoMatch";
import ProfilePage from './pages/Profile';
import Questions from "./pages/Questions";
import Question from "./pages/Question";

import MainNavigation from './components/Navigation/MainNavigation';
<<<<<<< HEAD
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

=======
>>>>>>> 4cf29b8540818c5cf6bd23bf5ad1f09449656ba5
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <React.Fragment>
          <MainNavigation />
          <main>
            <Switch>
              <Redirect from="/" to="/login" exact />
              <Route exact path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/logout" component={Logout} />
              <Route path="/Auth" component={AuthPage} />
              <Route path="/Home" component={HomePage} />
              <Route path="/Profile" component={ProfilePage} />
            </Switch>
          </main>
        </React.Fragment>
=======
      <React.Fragment>
      <MainNavigation />
      <main>
      <Switch>
      <Redirect from="/" to="/auth" exact />
      <Route path="/Auth" component={AuthPage} />
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/questions/:id" component={Question} />
      <Route path="/Home" component={HomePage} />
      <Route path="/Profile" component={ProfilePage} />
      <Route component={NoMatch} />
      </Switch>
      </main>     
      </React.Fragment> 
>>>>>>> 4cf29b8540818c5cf6bd23bf5ad1f09449656ba5
      </BrowserRouter>
    );
  }
}



export default App;
