import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MovieDetails() {
  const { id } = useParams()
  const movies = useSelector((state) => state.movies)
  console.log('movies:', movies)
  const movie = movies[id]
  console.log('movie:', movie)
  // const movie = movies[id].imdb_id
  return (
    <>
      <h2>Movie Details</h2>
    </>
  )
}

export default MovieDetails
