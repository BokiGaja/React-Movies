import React, {useState, useEffect} from 'react'
import {moviesService} from "../../services/Movies"
import {connect} from "react-redux";

import classes from './Movies.css'
import Spinner from '../../components/Spinner/Spinner'
import MovieRow from '../../components/MovieRow/MovieRow'
import * as actions from '../../store/Selected/selectedActions'


const movies = props => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      setTimeout(async () => {
        const {data} = await moviesService.getAll();
        setMovies([...data]);
        setInitialMovies([...data]);
      }, 2000);
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    let oldState = [...initialMovies];
    let newState = oldState.filter(movie => movie.title.includes(props.searchParams));
    setMovies([...newState]);
  }, [props.searchParams]);

  return (
    <div className={classes.moviesList}>
      {movies.length === 0 && props.searchParams.length === 0 ? <Spinner/> :
        <div style={{textAlign: 'center'}}>
          <div className={classes.selectedMoviesBox}>Number of selected movies: {props.selectedMovies.length}</div>
          <button className="btn btn-success"
                  onClick={() => props.onSelectAllMovies(movies.map(movie => movie.id))}>Select All
          </button>
          <button className="btn btn-danger" onClick={() => props.onDeselectAllMovies()}>Deselect All</button>
        </div>}
      {movies.map((movie, index) => (
        <MovieRow movie={movie} key={index}/>
      ))}
      {movies.length === 0 && props.searchParams.length > 0 ?
        <div className={classes.errorMessage}>No Movie</div> : null}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    searchParams: state.search.searchParams,
    selectedMovies: state.selected.selectedMovies
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectAllMovies: (allMovies) => dispatch({type: actions.SELECT_ALL, allMovies: allMovies}),
    onDeselectAllMovies: () => dispatch({type: actions.DESELECT_ALL})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(movies);