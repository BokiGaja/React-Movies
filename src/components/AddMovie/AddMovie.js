import React, {useState} from 'react'
import classes from './AddMovie.css'
import {withRouter} from "react-router";
import {moviesService} from "../../services/Movies";

const addMovie = props => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    director: '',
    duration: '',
    releaseDate: '',
    imageUrl: ''
  });
  const [inputError, setInputError] = useState({
    errorMessage: ''
  });

  const addNewMovie = async (event) => {
    event.preventDefault();
    const {data} = await moviesService.createMovie({...newMovie});
    if (data) {
      setInputError({...inputError, errorMessage: data});
    } else {
      props.history.push('/')
    }
  };

  return (
    <div className={classes.addMovieForm}>
      <form onSubmit={addNewMovie} className="form-group">
        <div>
          <input className="form-control" type="text" onChange={e => setNewMovie({...newMovie, title: e.target.value})}
                 placeholder="Title"/>
        </div>
        <div>
          <input className="form-control" type="text" onChange={e => setNewMovie({...newMovie, genre: e.target.value})}
                 placeholder="Genre"/>
        </div>
        <div>
          <input className="form-control" type="text"
                 onChange={e => setNewMovie({...newMovie, director: e.target.value})} placeholder="Director"/>
        </div>
        <div>
          <input className="form-control" type="number"
                 onChange={e => setNewMovie({...newMovie, duration: e.target.value})} placeholder="Duration"/>
        </div>
        <div>
          <input className="form-control" type="date"
                 onChange={e => setNewMovie({...newMovie, releaseDate: e.target.value})} placeholder="Release Date"
          />
        </div>
        <div>
          <input className="form-control" type="text"
                 onChange={e => setNewMovie({...newMovie, imageUrl: e.target.value})} placeholder="Image URL"/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Create movie</button>
      </form>
      {inputError.errorMessage.length > 0 ? <div className="alert alert-danger" role="alert">
        {inputError.errorMessage}
      </div> : null}

    </div>
  )
};
export default withRouter(addMovie);