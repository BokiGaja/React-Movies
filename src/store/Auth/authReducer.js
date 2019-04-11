import * as actionTypes from './authActions'

let initialState = {
  loggedIn: localStorage.getItem('token') !== null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        token: action.token
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state
  }
};

export default authReducer;