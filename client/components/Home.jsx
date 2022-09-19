import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const movies = useSelector((store) => store.movies)
  console.log(movies)

  return (
    <>
      <h2>Home</h2>
      {movies.map((movie) => {
        const { title, imdb_id, watched, img } = movie
        return (
          <div key={movie.id}>
            <img className="home-img" src={img} alt="movie" />
            <p>{title}</p>
          </div>
        )
      })}
    </>
  )
}

export default Home
