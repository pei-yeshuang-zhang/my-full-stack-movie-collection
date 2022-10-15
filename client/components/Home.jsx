import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const movies = useSelector((store) => store.movies)
  // console.log(movies)
  const unwatched = movies.filter((movie) => movie.watched == false)
  const watched = movies.filter((movie) => movie.watched == true)

  return (
    <>
      <h3>Movies to watch:</h3>
      {unwatched.map((movie) => {
        return (
          <div key={movie.id}>
            <img className="home-img" src={movie.img} alt="movie" />
            <Link to={`/movie/${movie.imdb_id}`}>
              <p>{movie.title}</p>
            </Link>
            <p>Wathched: {movie.watched}</p>
          </div>
        )
      })}

      <h3>Movies that I{"'"}ve seen:</h3>
      {watched.map((movie) => {
        return (
          <div key={movie.id}>
            <img className="home-img" src={movie.img} alt="movie" />
            <Link to={`/movie/${movie.imdb_id}`}>
              <p>{movie.title}</p>
            </Link>
            <p>Wathched: {movie.watched}</p>
          </div>
        )
      })}
    </>
  )
}

export default Home
