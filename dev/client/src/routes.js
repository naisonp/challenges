import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoutes'
import Login from './pages/Login';
import Home from './pages/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/login'} component={Login} />
        <PrivateRoute path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
