import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies').then((res) => {
    // console.log('RES.BODY: ', res.body)
    return res.body
  }) // return an array, not the whole res
}
