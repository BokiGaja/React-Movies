import React from 'react'
import classes from './MovieRow.css'
import {connect} from "react-redux";

import * as actions from '../../store/Selected/selectedActions'

const movieRow = props => (
  <div className={classes.movieRow}>
    <p>Title: {props.movie.title}</p>
    <p>Director: {props.movie.director}</p>
    <p>Duration: {props.movie.duration}</p>
    <p>Genre: {props.movie.genre}</p>
    {props.selectedMovies.includes(props.movie.id) ?
      <button className="btn btn-danger" disabled>Movie Selected</button> :
      <button className="btn btn-primary" onClick={() => props.onMovieSelected(props.movie.id)}>Select</button>
    }
  </div>
);

const mapStateToProps = state => {
  return {
    selectedMovies: state.selected.selectedMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMovieSelected: (id) => dispatch({type: actions.SELECT_MOVIE, id: id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(movieRow);