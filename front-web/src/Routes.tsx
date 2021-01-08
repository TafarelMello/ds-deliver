import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'

import Navbar from './components/Navbar'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
