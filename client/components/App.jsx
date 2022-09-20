import React from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import { getTheMovies } from '../actions/movies'

import AddMovie from './AddMovie'
import Home from './Home'
import MovieDetails from './MovieDetails'

function App() {
  const dispatch = useDispatch()
  // TODO: only trigger on load
  dispatch(getTheMovies())
  return (
    <>
      <header className="header">
        <h1>The flicks</h1>
        <Link to="/add">Add Movies</Link>
        <br />
        <Link to="/">Home</Link>
      </header>
      <section className="main" />
      <Routes>
        {/* If we go into '/', it will show Home component: */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
      </Routes>
    </>
  )
}

export default App
