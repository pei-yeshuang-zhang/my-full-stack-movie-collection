import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies').then((res) => {
    // console.log('RES.BODY: ', res.body)
    return res.body
  }) // return an array, not the whole res
}

export function postMoive(movie) {
  return request
    .post('/api/v1/movies')
    .send(movie)
    .then((res) => {
      console.log('RESPONSE: ', res.body)
      return res.body
    })
}
