import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAMovie, updWatched } from '../actions/movies'

function MovieDetails() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { imdb_id } = useParams()

  const movies = useSelector((store) => store.movies)
  const movie = movies.filter((movie) => movie.imdb_id === imdb_id)[0]

  const [watched, setWatched] = useState(movie.watched)

  const handleWatched = (e, movie) => {
    e.preventDefault()
    setWatched(!watched)
    dispatch(updWatched(movie.imdb_id, watched))
  }

  const handleDelete = (e, movie) => {
    e.preventDefault()
    dispatch(deleteAMovie(movie.imdb_id))
    navigate('/')
  }

  return (
    <>
      <img src={movie && movie.img} alt="movie"></img>
      <h2>{movie && movie.title}</h2>

      <div>
        <button onClick={(e) => handleWatched(e, movie)}>
          {watched === true ? 'Wathched' : 'Mark as watched'}
        </button>
        <button onClick={(e) => handleDelete(e, movie)}>Delete</button>
      </div>

      <p>{movie && movie.plot}</p>
    </>
  )
}

export default MovieDetails
