import React from 'react'
import NavButton from './NavButton/NavButton'
import classes from './Navbar.css'
import MovieSearch from '../components/MovieSearch/MovieSearch'
import {connect} from "react-redux";

const navbar = props => (
  <header>
    <nav className={classes.navbar}>
      <NavButton link="/movies">Movies</NavButton>
      <MovieSearch/>
      <NavButton link="/add">Add Movie</NavButton>
      {!props.loggedIn ? <NavButton link="/login">Login</NavButton> : <NavButton link="/logout">Logout</NavButton>}
    </nav>
  </header>
);

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
};

export default connect(mapStateToProps)(navbar);