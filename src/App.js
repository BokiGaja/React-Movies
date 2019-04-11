import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router";

import './App.css';
import Movies from './containers/Movies/Movies'
import Navbar from './layouts/Navbar'
import AddMovie from './components/AddMovie/AddMovie'
import Login from './components/Auth/Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/movies" exact component={Movies}/>
          <Route path="/add" exact component={AddMovie}/>
          <Route path="/login" exact component={Login}/>
          <Redirect from="*" to="/movies" />
        </Switch>
      </div>
    );
  }
}

export default App;
