import React, {useState} from 'react'
import classes from './Login.css'
import {authService} from "../../../services/AuthService";
import {connect} from "react-redux";
import * as actions from '../../../store/Auth/authActions'
import {withRouter} from "react-router";

const login = props => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [inputError, setInputError] = useState({
    errorMessage: ''
  });

  const loginAndRedirect = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.login(credentials);
      if (response.acces_token) {
        localStorage.setItem('token', response.acces_token);
        props.onLoginHandler(response.acces_token);
        props.history.push('/')
      }
      if (response.error) {
        setInputError({...inputError, errorMessage: response.error});
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <div className={classes.loginForm}>
      <h1>Login</h1>
      <form onSubmit={loginAndRedirect} className="form-group">
        <div>
          <input type="email" placeholder="email" className="form-control"
                 onChange={event => setCredentials({...credentials, email: event.target.value})}/>
        </div>
        <div>
          <input type="password" placeholder="password" className="form-control"
                 onChange={event => setCredentials({...credentials, password: event.target.value})}/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Login</button>
      </form>
      {inputError.errorMessage.length > 0 ? <div className="alert alert-danger" role="alert">
        {inputError.errorMessage}
      </div> : null}
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginHandler: token => dispatch({type: actions.LOGIN, token: token})
  }
};

export default connect(null, mapDispatchToProps)(withRouter(login));