import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App/App'
import Faq from './components/Faq/Faq'
import Privacy from './components/Privacy/Privacy'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/privacy" render={Privacy} />
        <Route path="/faq" component={Faq} />
        <Route path="/" render={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
