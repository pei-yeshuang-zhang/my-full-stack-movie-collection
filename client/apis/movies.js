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

export function deleteMovie(imdbID) {
  return request.delete(`/api/v1/movies/${imdbID}`).then((res) => {
    console.log('in local api', res.body)
    return res.body
  })
}
