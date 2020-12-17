import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './skeleton.css'
import './App.css'
import WatchCreate from './components/watchlist_crud/Create.jsx'
import WatchShow from './components/watchlist_crud/Show.jsx'
import Collections from './components/Collections.jsx'
import Home from './components/Home.jsx'
import WatchEdit from './components/watchlist_crud/Edit.jsx'
import Login from './components/Login.jsx'
import ShowShow from './components/show_crud/Show.jsx'
import Shows from './components/Shows.jsx'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/show/'} component={Shows}/>
          <Route exact path={'/show/:id'} component={ShowShow} />
          <Route exact path={'/watchlist/create'} component={WatchCreate}/>
          <Route exact path={'/watchlist/:id/edit'} component={WatchEdit} />
          <Route exact path={'/watchlist/:id'} component={WatchShow} />
          <Route exact path={'/collections'} component={Collections} />
          <Route exact path={'/'} exact component={Home} />
        </Switch>
      </Router>
    )
  }
}
