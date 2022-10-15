import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { searchForMovie } from '../apis/imdb'

function MovieDetails() {
  const { imdb_id } = useParams()
  const movies = useSelector((store) => store.movies)
  const movie = movies.filter((movie) => movie.imdb_id === imdb_id)
  console.log(movie)
  return (
    <>
      <img src={movie && movie[0].img} alt="movie"></img>
      <h2>{movie && movie[0].title}</h2>
      <p>{movie && movie[0].plot}</p>
    </>
  )
}

export default MovieDetails
