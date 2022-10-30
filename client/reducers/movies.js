import { SAVE_MOVIES, SAVE_ONE_MOVIE } from '../actions/movies'

function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SAVE_MOVIES:
      return payload
    case SAVE_ONE_MOVIE:
      return [payload, ...state]
    default:
      return state
  }
}

export default reducer
