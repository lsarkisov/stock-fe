import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NoMatch from 'components/no-match'
import Home from 'components/home'
import TimeSeries from 'components/time-series'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:name">
          <TimeSeries />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
