import React from 'react'
import classes from './MovieRow.css'

const movieRow = props => (
  <div className={classes.movieRow}>
    <p>ID: {props.movie.id}</p>
    <p>Title: {props.movie.title}</p>
    <p>Director: {props.movie.director}</p>
    <p>Duration: {props.movie.duration}</p>
    <p>Genre: {props.movie.genre}</p>
  </div>
);

export default movieRow;