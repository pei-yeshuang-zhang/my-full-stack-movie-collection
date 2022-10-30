import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addAMovie, deleteAMovie } from '../actions/movies'

function MovieDetails() {
  const navigate = useNavigate()
  const { imdb_id } = useParams()
  const movies = useSelector((store) => store.movies)
  const movie = movies.filter((movie) => movie.imdb_id === imdb_id)[0]

  const [watched, setWatched] = useState(movie.watched)

  const dispatch = useDispatch()

  // This wouldn't work as 'theMovie' has already been tidied up
  // But 'addAmovie' is looking for a untidied obj
  // Instead of add a new movie into database
  // What I should do is to UPDATE the watched value from false to true in our database
  const handleWatched = (e, theMovie) => {
    e.preventDefault()
    setWatched(!watched)
    if (watched == false) {
      dispatch(addAMovie(theMovie))
    }
  }

  // Redirect to home after deleting
  const handleDelete = (e, theMovie) => {
    e.preventDefault()
    dispatch(deleteAMovie(theMovie.imdb_id))
    navigate('/')
  }

  return (
    <>
      <img src={movie && movie.img} alt="movie"></img>
      <h2>{movie && movie.title}</h2>

      <div>
        <button onClick={(e) => handleWatched(e, movie)}>
          {watched == true ? 'Wathched' : 'Mark as watched'}
        </button>
        <button onClick={(e) => handleDelete(e, movie)}>Delete</button>
      </div>

      <p>{movie && movie.plot}</p>
    </>
  )
}

export default MovieDetails
