import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './skeleton.css'
import './App.css'
import WatchCreate from './components/Create'
import WatchShow from './components/Show'
import Collections from './components/Collections'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/watchlist/create'} component={WatchCreate}/>
          <Route exact path={'/watchlist/:id'} component={WatchShow} />
          <Route exact path={'/collections'} component={Collections} />
          <Route exact path={'/'} exact component={Home} />
        </Switch>
      </Router>
    )
  }
}
