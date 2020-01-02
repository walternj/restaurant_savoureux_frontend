import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'

import './routes.css'

import Header from './components/header'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import Services from './Pages/OurServices/OurServices'
import Contacts from './Pages/Contacts/Contacts'
import Reservation from './Pages/Reservation/Reservation'

export const Routes = () => {
  return (
    <BrowserRouter>
        <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/reservation" component={Reservation} />
      </Switch>
    </BrowserRouter>
  )
}
  
