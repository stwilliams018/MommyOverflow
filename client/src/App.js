import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import NoMatch from "./pages/NoMatch";
import ProfilePage from './pages/Profile';
import Questions from "./pages/Questions";
import Question from "./pages/Question";

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
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/questions/:id" component={Question} />
      <Route path="/Home" component={HomePage} />
      <Route path="/Profile" component={ProfilePage} />
      <Route component={NoMatch} />
      </Switch>
      </main>     
      </React.Fragment> 
      </BrowserRouter>
    );
  }
}



export default App;
