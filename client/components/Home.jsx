import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const movies = useSelector((store) => store.movies)
  const unwatched = movies.filter((movie) => movie.watched == false)
  const watched = movies.filter((movie) => movie.watched == true)

  return (
    <>
      <h3>Movies to watch:</h3>
      {unwatched.map((movie) => {
        return (
          <div className="main">
             <ul className="cards">
              <li className="cards_item">
                  <div className='card' key={movie.id}>
                    <img className="card_image" src={movie.img} alt="movie" />
                    <div className="card_content">
                      <Link className='card_title link_detail' to={`/movie/${movie.imdb_id}`}>
                        <h2 >{movie.title}</h2>
                      </Link>
                      <p class="card_text">{movie.plot}</p>
                      <button className="btn card_btn">
                        <Link className='link_detail' to={`/movie/${movie.imdb_id}`}>
                        Read More
                        </Link>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        )
      })}

      <h3>Movies that I{"'"}ve seen:</h3>
      {watched.map((movie) => {
        return (
          <div className="main">
            <ul className="cards">
            <li className="cards_item">
                <div className='card' key={movie.id}>
                  <img className="card_image" src={movie.img} alt="movie" />
                    <div className="card_content">
                    <Link className='card_title link_detail' to={`/movie/${movie.imdb_id}`}>
                        <h2 >{movie.title}</h2>
                      </Link>
                      <p class="card_text">{movie.plot}</p>
                      <button className="btn card_btn">
                        <Link className='link_detail' to={`/movie/${movie.imdb_id}`}>
                        Read More
                        </Link>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )
      })}
      <h3 className="made_by">Made by Pei Zhang</h3>
    </>
  )
}

export default Home
