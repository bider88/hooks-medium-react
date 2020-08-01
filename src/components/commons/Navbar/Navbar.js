import React from 'react';
import logo from '../../../logo.svg';

const Navbar = () => {

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <span className="navbar-brand">
        <img src={logo} className="App-logo" alt="logo"/>
        Hooks con React
      </span>
    </nav>
  )
}

export default Navbar;