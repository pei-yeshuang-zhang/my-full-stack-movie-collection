const config = require('./knexfile').test
const testDb = require('knex')(config)

const db = require('./db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('Get all movies', () => {
  test('Should get all the movies', async () => {
    const actual = await db.getAllMovies(testDb)
    expect(actual).toHaveLength(8)
  })

  test('Should returns objects with expected properties', async () => {
    const arr = await db.getAllMovies(testDb)
    const actual = arr[0]
    expect(actual.id).toBe(1)
    expect(actual.title).toBe('The Batman')
    expect(actual.watched).toBeFalsy()
    expect(actual.img).toBeTruthy()
    expect(actual.plot).toBe(
      'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.'
    )
  })
})
