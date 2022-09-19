const { fetchAllMovies } = require('../apis/movies')

// Variables
export const SAVE_MOVIES = 'SAVE_MOVIES'

// Action creators
function saveMoives(moviesArr) {
  return {
    type: SAVE_MOVIES,
    payload: moviesArr,
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
