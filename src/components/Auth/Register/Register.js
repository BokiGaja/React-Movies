import React, {useState} from 'react'
import {authService} from "../../../services/AuthService";
import {withRouter} from "react-router"
import classes from './Register.css'

const register = props => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [inputError, setInputError] = useState({
    errorMessage: ''
  });

  const registerAndRedirect = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.register({...credentials});
      if (response.error) {
        setInputError({...inputError, errorMessage: response.error});
      } else {
        props.history.push('/login')
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <div className={classes.registerForm}>
      <h1>Register</h1>
      <form onSubmit={registerAndRedirect} className="form-group">
        <div>
          <input type="text" placeholder="email" className="form-control"
                 onChange={event => setCredentials({...credentials, name: event.target.value})}/>
        </div>
        <div>
          <input type="email" placeholder="email" className="form-control"
                 onChange={event => setCredentials({...credentials, email: event.target.value})}/>
        </div>
        <div>
          <input type="password" placeholder="password" className="form-control"
                 onChange={event => setCredentials({...credentials, password: event.target.value})}/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Register</button>
      </form>
      {inputError.errorMessage.length > 0 ? <div className="alert alert-danger" role="alert">
        {inputError.errorMessage}
      </div> : null}
    </div>
  )
};

export default withRouter(register);