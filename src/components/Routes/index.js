import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import SignInForm from '../../pages/SignInForm';
import SignupForm from '../../pages/SignupForm';
import Trending from '../../pages/Trending';

function index() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Route path="/trending" exact component={Trending} />
        <Route path="/signup" exact component={SignupForm} />
        <Route path="/signin" exact component={SignInForm} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default index;
