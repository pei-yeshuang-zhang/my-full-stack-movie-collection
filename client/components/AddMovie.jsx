import React, { useState } from 'react'
import { searchForMovie } from '../apis/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('helo :)')
  const [results, setResults] = useState([])

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

  return (
    <>
      <h2>Add Movie</h2>
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
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  )
}

export default AddMovie
