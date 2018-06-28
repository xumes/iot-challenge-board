import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Login from '../Login/Login'

const App = () =>
  <Router>
    <Switch>
      <Route path='/' component={Login}/>    
    </Switch>
  </Router>

export default App;