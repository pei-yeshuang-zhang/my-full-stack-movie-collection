const request = require('supertest')
const server = require('../server')
const dbFuncs = require('../db/db')

jest.mock('../db/db', () => {
  return {
    getAllMovies: jest.fn(),
    getOneMovie: jest.fn(),
    insertMovie: jest.fn(),
  }
})

describe('GET /api/v1/movies', () => {
  test('return all the movies if the db promise resolves', () => {
    const fakeResult = [
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

    dbFuncs.getAllMovies.mockImplementation(() => {
      return Promise.resolve(fakeResult)
    })

    return request(server)
      .get('/api/v1/movies')
      .then((resp) => {
        expect(dbFuncs.getAllMovies).toHaveBeenCalled()

        expect(resp.body).not.toEqual({})
        expect(resp.body).toHaveLength(2)

        const expected = {
          id: 2,
          title: 'Movie 2',
          Director: 'Director 2',
          img: 'picture 2.jpg',
        }

        expect(resp.body[1]).toEqual(expected)
      })
  })

  it('throws an appropriate error if the db promise is rejected', () => {
    dbFuncs.getAllMovies.mockImplementation(() => {
      return Promise.reject(new Error('Database Error'))
    })

    return request(server)
      .get('/api/v1/movies')
      .then((resp) => {
        expect(dbFuncs.getAllMovies).toHaveBeenCalled()

        expect(resp.status).toBe(500)
        expect(resp.text).toContain('Database Error')
      })
  })
})

test.todo('POST /api/v1/movies')
