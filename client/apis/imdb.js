import request from 'superagent'

const imdbUrlSearch = 'http://www.omdbapi.com/?apikey='

export function searchForMovie(movie) {
  // The param 'movie' is from AddMoive.movieSearch
  return request
    .get(`${imdbUrlSearch}${process.env.MOVIE_KEY}&t=${movie}`)
    .then((res) => {
      return res.body
    })
}
