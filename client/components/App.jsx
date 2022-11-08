import React from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { getTheMovies } from '../actions/movies'

import AddMovie from './AddMovie'
import Home from './Home'
import MovieDetails from './MovieDetails'
import Notfound from './Notfound'

function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  // Check the path we are in
  const isHome = location.pathname === '/'

  // TODO: only trigger on load
  dispatch(getTheMovies())
  return (
    <>
      <section>
        <header>
          <h1>The Flicks</h1>
        </header>
        <div>
          <h2>
            {isHome ? <Link className='link_add' to="/add">Add Movies</Link> : <Link to="/">Home</Link>}
          </h2>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:imdb_id" element={<MovieDetails />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  )
}

export default App
