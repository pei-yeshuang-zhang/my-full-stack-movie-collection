import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { searchForMovie } from '../apis/imdb'

function MovieDetails() {
  // const { imdb_id } = useParams()
  const oneMovie = useSelector((store) => store.movies)
  console.log('ONE MOVIE: ', oneMovie)

  // const [movie, setMovie] = useState([])

  // async function getMovieDetails(e) {
  //   if (e && e.preventDefault) {
  //     e.preventDefault()
  //   }
  //   const details = await searchForMovie(imdb_id)
  //   setMovie(details)
  // }

  // useEffect(getMovieDetails(), [])

  // const { Title } = movie ? movie : {}

  return (
    <>
      <h2>HELLO</h2>
    </>
  )
}

export default MovieDetails
