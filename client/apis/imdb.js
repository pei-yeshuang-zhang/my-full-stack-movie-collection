import request from 'superagent'
import { key } from '../../key'

const imdbUrl = 'https://imdb-api.com/en/API/SearchMovie/'

export function searchForMovie(movie) {
  // The param 'movie' is from AddMoive.movieSearch
  return request.get(`${imdbUrl}${key}/${movie}`).then((res) => {
    console.log('IMDB SEARCH: ', res.body.results)
    return res.body.results
  })
}
