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
import ShowCreate from './components/show_crud/Create'
import ShowEdit from './components/show_crud/Edit'
import Search from './components/Search'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/watchlist/:id/show/create'} component={ShowCreate} />
          <Route exact path={'/watchlist/:id/show/:showId/edit'} component={ShowEdit} />
          <Route exact path={'/watchlist/:id/show/:showId'} component={ShowShow} />
          <Route exact path={'/watchlist/:id/show/'} component={Shows} />
          <Route exact path={'/watchlist/create'} component={WatchCreate} />
          <Route exact path={'/watchlist/:id/edit'} component={WatchEdit} />
          <Route exact path={'/watchlist/:id'} component={WatchShow} />
          <Route exact path={'/collections'} component={Collections} />
          <Route exact path={'/search'} component={Search}/>
          <Route exact path={'/'} exact component={Home} />
        </Switch>
      </Router>
    )
  }
}