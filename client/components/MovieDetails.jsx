import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MovieDetails() {
  const { imdb_id } = useParams()
  const movies = useSelector((store) => store.movies)
  const movie = movies.filter((movie) => movie.imdb_id === imdb_id)

  const [watched, setWatched] = useState(movie[0].watched)

  const handleWatched = () => {
    setWatched(!watched)
  }

  return (
    <>
      <img src={movie && movie[0].img} alt="movie"></img>
      <h2>{movie && movie[0].title}</h2>

      <div>
        <button onClick={handleWatched}>
          {watched == true ? 'Wathched' : 'Unwatched'}
        </button>
      </div>

      <p>{movie && movie[0].plot}</p>
    </>
  )
}

export default MovieDetails
