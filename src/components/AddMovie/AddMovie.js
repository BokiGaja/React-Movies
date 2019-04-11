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

  const addNewMovie = event => {
    event.preventDefault();
    moviesService.createMovie({...newMovie});
    props.history.push('/')
  };

  return (
    <div className={classes.addMovieForm}>
      <form onSubmit={addNewMovie} className="form-group">
        <div>
          <input className="form-control" type="text" onChange={e => setNewMovie({...newMovie, title: e.target.value})}
                 placeholder="Title" required/>
        </div>
        <div>
          <input className="form-control" type="text" onChange={e => setNewMovie({...newMovie, genre: e.target.value})}
                 placeholder="Genre" required/>
        </div>
        <div>
          <input className="form-control" type="text"
                 onChange={e => setNewMovie({...newMovie, director: e.target.value})} placeholder="Director" required/>
        </div>
        <div>
          <input className="form-control" type="number"
                 onChange={e => setNewMovie({...newMovie, duration: e.target.value})} placeholder="Duration" required
                 max="200"/>
        </div>
        <div>
          <input className="form-control" type="date"
                 onChange={e => setNewMovie({...newMovie, releaseDate: e.target.value})} placeholder="Release Date"
                 required/>
        </div>
        <div>
          <input className="form-control" type="url"
                 onChange={e => setNewMovie({...newMovie, imageUrl: e.target.value})} placeholder="Image URL"/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Create movie</button>
      </form>
    </div>
  )
};
export default withRouter(addMovie);