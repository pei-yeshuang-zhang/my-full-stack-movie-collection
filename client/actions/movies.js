const {
  fetchAllMovies,
  postMovie,
  fetchDeleteMovie,
} = require('../apis/movies')

// Variables
export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
export const DEL_ONE_MOVIE = 'DEL_ONE_MOVIE'

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

function delOneMovie(imdbID) {
  console.log('in action ', imdbID)
  return {
    type: DEL_ONE_MOVIE,
    payload: imdbID,
  }
}

// Thunks: call the api, get data back, then use the action creators to dispatch actions to redux
export function getTheMovies() {
  // call api
  return async (dispatch) => {
    const movieArr = await fetchAllMovies() // get the data that returned from api, which is the res.body
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
      plot: movie.Plot,
    }

    const movieFromServer = await postMovie(tidyMovie)
    dispatch(saveOneMovie(movieFromServer))
  }
}

export function deleteAMovie(imdbID) {
  return async (dispatch) => {
    const id = await fetchDeleteMovie(imdbID)
    console.log('in thunk ', imdbID, id)
    dispatch(delOneMovie(id))
  }
}
