const { fetchAllMovies, postMoive } = require('../apis/movies')

// Variables
export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

// Action creators
function saveMoives(moviesArr) {
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

// Thunks: call the api, get data back, then use the action creators to dispatch actions to redux
export function getTheMovies() {
  // call api
  return async (dispatch) => {
    const movieArr = await fetchAllMovies() // get the data that returned from api, which is the res.body
    console.log('THUNK: ', movieArr)
    // dispatch action
    dispatch(saveMoives(movieArr))
  }
}

export function addAMoive(movie) {
  // console.log('movie:', movie)
  return async (dispatch) => {
    const tidyMoive = {
      title: movie.title,
      img: movie.image,
      imdb_id: movie.id,
    }
    // console.log('tidy: ', tidyMoive)
    const movieFromServer = await postMoive(tidyMoive)
    dispatch(saveOneMovie(movieFromServer))
  }
}
