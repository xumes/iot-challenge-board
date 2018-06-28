import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Login from '../Login/Login'
import Poker from '../Poker/Poker'
import Test from '../Test/Test'

const App = () =>
  <Router>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/poker' component={Poker}/>    
    </Switch>
  </Router>

export default App;