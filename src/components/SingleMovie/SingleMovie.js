import React, {useState, useEffect} from 'react'
import {moviesService} from "../../services/Movies";
import MovieRow from '../../components/MovieRow/MovieRow'
import {withRouter} from "react-router";

const singleMovie = props => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const {data} = await moviesService.getOne(props.match.params.id);
      setMovie({...data})
    }
    fetchMovie();
  },[]);
  return (
    <MovieRow movie={movie} isSingle={true}/>
  )
};

export default withRouter(singleMovie);