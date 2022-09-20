import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchForMovie } from '../apis/imdb'
import { addAMoive } from '../actions/movies'

function AddMovie() {
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
        <div key={movie.id}>
          <img className="result-img" src={movie.image} alt="movie" />
          <p>{movie.title}</p>
          <button onClick={() => handleAdd(movie)}>Save</button>
        </div>
      ))}
    </>
  )
}

export default AddMovie
