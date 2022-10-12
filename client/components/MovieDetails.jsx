import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { fetchMovieDetails } from '../apis/imdb'
// import { getMovieDetails } from '../actions/movies'

function MovieDetails() {
  const { imdb_id } = useParams()

  const [movie, setMovie] = useState([])

  async function getMovieDetails(e) {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    const details = await fetchMovieDetails(imdb_id)
    setMovie(details)
  }

  useEffect(getMovieDetails(), [])

  const { title, plot } = movie ? movie : {}

  return (
    <>
      <h2>{title}</h2>
      <p>{plot}</p>
    </>
  )
}

export default MovieDetails
