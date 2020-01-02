import React, {useState} from 'react'
import {Link, NavLink } from 'react-router-dom'

import './header.css';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (event) => {
    event.preventDefault()

    if(!showMenu) {
      setShowMenu(true)
      document.addEventListener('click', handleCloseMenu)
    }
    else {
      setShowMenu(false)
      document.removeEventListener('click', handleCloseMenu)
    }
  }

  const handleCloseMenu  = () => {

    setShowMenu(false)
    document.removeEventListener('click', handleCloseMenu)
  }

  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div className="logo">
        <Link id="linkLogo"  to="/">
          <p id="savoureux" >Savoureux</p><p id="exclamation"> !</p>
        </Link>
      </div>
        <nav className="menu">
          <NavLink activeClassName="main-nav-active"  className="links" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="main-nav-active" className="links" to="/menu">
            Menu
          </NavLink>
          <NavLink activeClassName="main-nav-active" className="links" to="/services">
            Services
          </NavLink>
          <NavLink activeClassName="main-nav-active" className="links" to="/contacts">  
            Contacts
          </NavLink>
          <NavLink activeClassName="reserv-buttom-active" className="reservButton" to="/reservation">  
            Réservation
          </NavLink>
        </nav>

        <button className="menuButton" onClick={handleShowMenu}>
          <i className={showMenu ? ("fa fa-window-close") : ( "fa fa-bars")}/>
        </button>

        {
          showMenu 
            ? (
              <nav className="dropdownMenu">
                <NavLink activeClassName="main-dropdown-active" exact to="/" >
                  <li><i className="fa fa-home" /> Home </li>
                </NavLink>
                <NavLink activeClassName="main-dropdown-active" exact to="/menu">
                  <li><i className="fa fa-list-alt"/> Menus </li>
                </NavLink>
                <NavLink activeClassName="main-dropdown-active" exact to="/services">
                  <li>🛎 Services </li>
                </NavLink>
                <NavLink activeClassName="main-dropdown-active" exact to="/contacts">  
                  <li><i className="fa fa-envelope-open"/> Contacts </li>
                </NavLink>
                <NavLink activeClassName="main-dropdown-active" exact to="/reservation">  
                  <li>🍽 Réservations </li>
                </NavLink>
              </nav>
            )
            :
            (
              null
            )
        }
      </div>
    </div>
  );
}
