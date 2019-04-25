import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import MainNavigation from './components/Navigation/MainNavigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <MainNavigation />
      <main>
      <Switch>
      <Redirect from="/" to="/auth" exact />
      <Route path="/Auth" component={AuthPage} />
      <Route path="/Home" component={HomePage} />
      <Route path="/Profile" component={ProfilePage} />
      </Switch>
      </main>     
      </React.Fragment> 
      </BrowserRouter>
    );
  }
}



export default App;
