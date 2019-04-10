import React from 'react'
import NavButton from './NavButton/NavButton'
import classes from './Navbar.css'

const navbar = () => (
  <header>
    <nav className={classes.navbar}>
      <NavButton link="/movies">Movies</NavButton>
    </nav>
  </header>
);

export default navbar;