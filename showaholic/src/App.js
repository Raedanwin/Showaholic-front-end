import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Collections from './components/Collections'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact to={'/collections'} component={Collections} />

          <Route exact to={'/'} component={Home} />
        </Switch>
      </Router>
    )
  }
}
