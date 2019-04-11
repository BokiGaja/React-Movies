import React, { Component } from 'react';
import './App.css';
import Navbar from './layouts/Navbar'
import {Route, Switch, Redirect} from "react-router";
import Movies from './containers/Movies/Movies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/movies" exact component={Movies}/>
          <Redirect from="*" to="/movies" />
        </Switch>
      </div>
    );
  }
}

export default App;
