import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux'
import {createStore} from "redux"
import {combineReducers} from "redux";

import './index.css';
import App from './App';
import searchReducer from './store/Search/searchReducer'
import selectedReducer from './store/Selected/selectedReducer'
import authReducer from './store/Auth/authReducer'

const rootReducer = combineReducers({selected: selectedReducer, search: searchReducer, auth: authReducer});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
