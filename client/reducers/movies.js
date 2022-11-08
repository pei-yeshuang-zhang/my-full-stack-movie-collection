import {
  SAVE_MOVIES,
  SAVE_ONE_MOVIE,
  DEL_ONE_MOVIE,
  UPDATE_WATCHED,
} from '../actions/movies'

function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SAVE_MOVIES:
      return payload
    case SAVE_ONE_MOVIE:
      return [payload, ...state]
    case DEL_ONE_MOVIE:
      return state.filter((movie) => {
        return payload != movie.imdb_id
      })
    case UPDATE_WATCHED:
      return payload
    default:
      return state
  }
}

export default reducer
