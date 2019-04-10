import React, { Component } from 'react';
import './App.css';
import Navbar from './layouts/Navbar'
import {Route, Switch} from "react-router";
import Movies from './components/Movies/Movies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/movies" exact component={Movies}/>
        </Switch>
      </div>
    );
  }
}

export default App;
