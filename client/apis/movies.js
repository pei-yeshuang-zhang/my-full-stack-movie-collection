import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies').then((res) => {
    return res.body
  })
}

export function postMovie(movie) {
  return request
    .post('/api/v1/movies')
    .send(movie)
    .then((res) => {
      console.log('in post api ', res.body)
      return res.body
    })
}

export function fetchDeleteMovie(imdbID) {
  return request.delete(`/api/v1/movies/${imdbID}`).then((res) => {
    return res.body
  })
}

export function fetchIsWatched(imdbID, data) {
  return request
    .patch(`/api/v1/movies/${imdbID}`)
    .send(data)
    .then((res) => {
      return res.body
    })
}
