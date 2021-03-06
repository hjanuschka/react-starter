import React from 'react';
import { Router, Route } from 'react-router';

import Login from './containers/Login';
import About from './containers/About';
import Dashboard from './containers/Dashboard';
import NotFound from './containers/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
