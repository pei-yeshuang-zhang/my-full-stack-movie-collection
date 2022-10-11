import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const movies = useSelector((store) => store.movies)
  console.log(movies)
  const unwatched = movies.filter((movie) => movie.watched == false)
  const watched = movies.filter((movie) => movie.watched == true)

  return (
    <>
      <h3>Movies to watch:</h3>
      {unwatched.map((movie) => {
        return (
          <div key={movie.id}>
            <img className="home-img" src={movie.img} alt="movie" />
            <p>{movie.title}</p>
            <p>Wathched: {movie.watched}</p>
          </div>
        )
      })}

      <h3>Movies that I{"'"}ve seen:</h3>
      {watched.map((movie) => {
        return (
          <div key={movie.id}>
            <img className="home-img" src={movie.img} alt="movie" />
            <p>{movie.title}</p>
            <p>Wathched: {movie.watched}</p>
          </div>
        )
      })}
    </>
  )
}

export default Home
