// const temporaryInitialState = [
//   {
//     id: 1,
//     title: 'The Batman',
//     imdb_id: 'tt1877830',
//     watched: false,
//     img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg',
//   },
//   {
//     id: 2,
//     title: 'Arrival',
//     imdb_id: 'tt2543164',
//     watched: false,
//     img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg',
//   },
// ]

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
