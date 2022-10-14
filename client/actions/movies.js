const { fetchAllMovies, postMovie } = require('../apis/movies')
// const { fetchMovieDetails } = require('../apis/imdb')

// Variables
export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
// export const SAVE_MOVIE_DETAILS = 'SAVE_MOVIE_DETAILS'

// Action creators
function saveMovies(moviesArr) {
  return {
    type: SAVE_MOVIES,
    payload: moviesArr,
  }
}

function saveOneMovie(movieObj) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: movieObj,
  }
}

// function saveMovieDetails(movieDetails) {
//   return {
//     type: SAVE_MOVIE_DETAILS,
//     payload: movieDetails,
//   }
// }

// Thunks: call the api, get data back, then use the action creators to dispatch actions to redux
export function getTheMovies() {
  // call api
  return async (dispatch) => {
    const movieArr = await fetchAllMovies() // get the data that returned from api, which is the res.body
    console.log('THUNK: ', movieArr)
    // dispatch action
    dispatch(saveMovies(movieArr))
  }
}

export function addAMovie(movie) {
  return async (dispatch) => {
    const tidyMovie = {
      title: movie.Title,
      img: movie.Poster,
      imdb_id: movie.imdbID,
    }

    const movieFromServer = await postMovie(tidyMovie)
    dispatch(saveOneMovie(movieFromServer))
  }
}

// export function getMovieDetails() {
//   return async (dispatch) => {
//     const movieDetails = await fetchMovieDetails()
//     console.log('Details From thunk: ', movieDetails)
//     dispatch(saveMovieDetails(movieDetails))
//   }
// }
