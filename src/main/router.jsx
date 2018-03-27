import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about'
import Users from '../users'

export default props => (
  <Router history={hashHistory}>
    <Route path='/home' component={About} />
    <Route path='/users' component={Users} />
    <Redirect from='*' to='/users' />
  </Router>
)
