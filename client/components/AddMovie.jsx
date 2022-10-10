import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchForMovie } from '../apis/imdb'
import { addAMoive } from '../actions/movies'

function AddMovie() {
  // const movies = useSelector((store) => store.movies)
  // Another way to write it
  const alreayAddedIds = useSelector((store) =>
    store.movies.map((movie) => movie.imdb_id)
  )

  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState([])
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    e.preventDefault()
    // console.log('SUBMIT', movieSearch)
    const movieSuggetstions = await searchForMovie(movieSearch)
    setResults(movieSuggetstions)
    setMovieSearch('') // Set the input value back to empty
  }

  const handleTyping = (e) => {
    setMovieSearch(e.target.value) // As we type, it will update the value to state
  }

  const handleAdd = (movie) => {
    dispatch(addAMoive(movie))
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">New Movie:</label>
        <input
          type="text"
          id="search"
          onChange={handleTyping}
          value={movieSearch} // make the form value mathches the state that has been changed
        />
        <button>Search</button>
      </form>
      {results.map((movie) => (
        <div key={movie.id}>
          <img className="result-img" src={movie.image} alt="movie" />
          <p>{movie.title}</p>
          <button
            onClick={() => handleAdd(movie)}
            // disabled={Boolean(movies.find((film) => film.imdb_id === movie.id))}
            // Another way to write it:
            disabled={alreayAddedIds.includes(movie.id)}
          >
            Save
          </button>
        </div>
      ))}
    </>
  )
}

export default AddMovie
