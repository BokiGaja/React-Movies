import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router";
import {connect} from "react-redux";

import './App.css';
import Movies from './containers/Movies/Movies'
import Navbar from './layouts/Navbar'
import AddMovie from './components/AddMovie/AddMovie'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import SingleMovie from './components/SingleMovie/SingleMovie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          {this.props.isLogged ? <Route path="/movies/:id" exact component={SingleMovie}/> : null}
          <Route path="/movies" exact component={Movies}/>
          {this.props.isLogged ? <Route path="/add" exact component={AddMovie}/> : null}
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Redirect from="*" to="/movies"/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.loggedIn
  }
};

export default connect(mapStateToProps)(App);
