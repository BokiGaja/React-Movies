import React from 'react'
import NavButton from './NavButton/NavButton'
import classes from './Navbar.css'
import MovieSearch from '../components/MovieSearch/MovieSearch'

const navbar = () => (
  <header>
    <nav className={classes.navbar}>
      <NavButton link="/movies">Movies</NavButton>
      <MovieSearch/>
    </nav>
  </header>
);

export default navbar;