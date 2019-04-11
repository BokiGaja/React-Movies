import React, {useState, useEffect} from 'react'
import {moviesService} from "../../services/Movies"
import {connect} from "react-redux";

import classes from './Movies.css'
import Spinner from '../../components/Spinner/Spinner'
import MovieRow from '../../components/MovieRow/MovieRow'


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
      {movies.map((movie, index) => (
        <MovieRow movie={movie} key={index}/>
      ))}
      {movies.length === 0 && props.searchParams.length ===0 ? <Spinner/> : null}
      {movies.length === 0 && props.searchParams.length > 0 ?
        <div className={classes.errorMessage}>No Movie</div> : null}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    searchParams: state.searchParams
  }
};

export default connect(mapStateToProps)(movies);