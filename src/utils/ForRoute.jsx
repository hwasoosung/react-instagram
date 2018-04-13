import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignIn'
import Temporary from '../components/Temporary'

function ForRoute() {
  return (
  <Switch>
    <Route exact path="/" component={SignIn}></Route>
    <Route exact path="/temporary" component={Temporary}></Route>
  </Switch>
  );
};

export default ForRoute;