import React from 'react'
import NavButton from './NavButton/NavButton'
import './Navbar.css'

const navbar = () => (
  <header>
    <nav className="navbar">
      <NavButton link="/movies">Movies</NavButton>
    </nav>
  </header>
);

export default navbar;