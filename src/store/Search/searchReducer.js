import * as actionTypes from './searchActions'

let initialState = {
  searchParams: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_INPUT_CHANGED:
      return {
        ...state,
        searchParams: action.currParams
      };
    default:
      return state
  }
};

export default searchReducer;