import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MovieDetails() {
  const { imdb_id } = useParams()
  const movies = useSelector((store) => store.movies)
  const movie = movies.filter((movie) => movie.imdb_id === imdb_id)
  // TODO: Finish onClick functions
  function handleWatched() {}

  function handleUnWatched() {}

  return (
    <>
      <img src={movie && movie[0].img} alt="movie"></img>
      <h2>{movie && movie[0].title}</h2>

      <div>
        {movie[0].watched == true ? (
          <button onClick={handleWatched}>Wathched</button>
        ) : (
          <button onClick={handleUnWatched}>UnWathched</button>
        )}
      </div>

      <p>{movie && movie[0].plot}</p>
    </>
  )
}

export default MovieDetails
