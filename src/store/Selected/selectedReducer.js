import * as actionTypes from './selectedActions'

let initialState = {
  selectedMovies: []
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_MOVIE:
      return {
        ...state,
        selectedMovies: [...state.selectedMovies, action.id]
      };
    case actionTypes.SELECT_ALL:
      return {
        ...state,
        selectedMovies: [...action.allMovies]
      };
    case actionTypes.DESELECT_ALL:
      return {
        ...state,
        selectedMovies: []
      };
    default:
      return state;
  }
};

export default selectedReducer;