import React from 'react'
import NavButton from './NavButton/NavButton'
import classes from './Navbar.css'
import MovieSearch from '../components/MovieSearch/MovieSearch'
import {connect} from "react-redux";
import {authService} from "../services/AuthService";
import * as actions from '../store/Auth/authActions'
import {withRouter} from "react-router";

const navbar = props => {
  const logout = async () => {
    await authService.logout(props.token);
    props.onLogoutHandler();
    props.history.push('/');
  };
  return (
    <header>
      <nav className={classes.navbar}>
        <NavButton link="/movies">Movies</NavButton>
        <MovieSearch/>
        <NavButton link="/add">Add Movie</NavButton>
        {!props.loggedIn ? <NavButton link="/login">Login</NavButton> :
          <button className={classes.Logout} onClick={logout}>Logout</button>}
      </nav>
    </header>
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    token: state.auth.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutHandler: () => dispatch({type: actions.LOGOUT})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(navbar));