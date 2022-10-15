import request from 'superagent'
import { key } from '../../key'

const imdbUrlSearch = 'http://www.omdbapi.com/?apikey='

export function searchForMovie(movie) {
  // The param 'movie' is from AddMoive.movieSearch
  return request.get(`${imdbUrlSearch}${key}&t=${movie}`).then((res) => {
    console.log('BODY :', res.body)
    return res.body
  })
}
