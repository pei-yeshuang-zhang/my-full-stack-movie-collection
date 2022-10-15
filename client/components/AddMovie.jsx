import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchForMovie } from '../apis/imdb'
import { addAMovie } from '../actions/movies'

function AddMovie() {
  // const movies = useSelector((store) => store.movies)
  // Another way to write it
  const alreayAddedIds = useSelector((store) =>
    store.movies.map((movie) => movie.imdb_id)
  )

  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState(null)
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    e.preventDefault()

    const movieSuggestions = await searchForMovie(movieSearch)
    setResults(movieSuggestions)
    setMovieSearch('') // Set the input value back to empty
  }

  const handleTyping = (e) => {
    setMovieSearch(e.target.value) // As we type, it will update the value to state
  }

  const handleAdd = (movie) => {
    dispatch(addAMovie(movie))
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

      {results ? (
        <>
          <img className="result-img" src={results.Poster} alt="movie" />
          <p>{results.Title}</p>
          <button
            onClick={() => handleAdd(results)}
            disabled={alreayAddedIds.includes(results.imdbID)}
          >
            Save
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default AddMovie
