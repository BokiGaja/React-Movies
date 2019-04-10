import React, {useState, useEffect} from 'react'
import {moviesService} from "../../services/Movies"
import MovieRow from '../../components/MovieRow/MovieRow'
import classes from './Movies.css'

const movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const {data} = await moviesService.getAll();
      setMovies([...data]);
    }

    fetchMovies();
  }, []);

  return (
    <div className={classes.moviesList}>
      {movies.map((movie, index) => (
        <MovieRow movie={movie} key={index}/>
      ))}
    </div>
  )
}

export default movies;