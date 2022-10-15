import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies').then((res) => {
    return res.body
  }) // return an array, not the whole res
}

export function postMovie(movie) {
  return request
    .post('/api/v1/movies')
    .send(movie)
    .then((res) => {
      return res.body
    })
}
