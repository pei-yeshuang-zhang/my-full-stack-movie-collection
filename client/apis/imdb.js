import request from 'superagent'
import { key } from '../../key'

const imdbUrlSearch = 'https://imdb-api.com/en/API/SearchMovie/'
const imdbUrlTitle = 'https://imdb-api.com/en/API/Title/'

export function searchForMovie(movie) {
  // The param 'movie' is from AddMoive.movieSearch
  return request.get(`${imdbUrlSearch}${key}/${movie}`).then((res) => {
    console.log('IMDB SEARCH: ', res.body.results)
    return res.body.results
  })
}

export function getMovieDetails(imdbID) {
  // The param 'movie' is from AddMoive.movieSearch
  return request.get(`${imdbUrlTitle}${key}/${imdbID}`).then((res) => {
    console.log('IMDB TITLE: ', res.body)
    return res.body
  })
}
