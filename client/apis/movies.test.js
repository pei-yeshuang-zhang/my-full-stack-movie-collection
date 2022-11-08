import nock from 'nock'

import { fetchAllMovies } from './movies'

describe('Get all the movies', () => {
  const fakeMoviesArr = [
    {
      id: 1,
      title: 'Movie 1',
      Director: 'Director 1',
      img: 'picture 1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      Director: 'Director 2',
      img: 'picture 2.jpg',
    },
  ]

  const scope = nock('http://localhost')
    .get('/api/v1/movies')
    .reply(200, fakeMoviesArr)

  it('Should returns the body of the response', () => {
    expect.assertions(3)
    return fetchAllMovies().then((movies) => {
      expect(movies).toHaveLength(2)
      expect(movies).toEqual(fakeMoviesArr)
      expect(scope.isDone()).toBe(true)
    })
  })
})
