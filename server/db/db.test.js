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

describe('Get one movie', () => {
  test('Should successfully retrieves intended movie and all properties', async () => {
    const actual = await db.getOneMovie(3, testDb)

    expect(actual.id).toBe(3)
    expect(actual.title).toBe('Inception')
    expect(actual.watched).toBeFalsy()
    expect(actual.img).toBeTruthy()
    expect(actual.plot).toBe(
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.'
    )
  })

  test('Should returns nothing if id is invalid', async () => {
    expect.assertions(1)
    const actual = await db.getOneMovie(9, testDb)
    expect(actual).toBeUndefined()
  })
})

describe('Insert movie', () => {
  test('Should successfully adds a movie', async () => {
    const newMovie = { title: 'New Movie', plot: 'Plot', imdb_id: '000000' }
    const id = await db.insertMovie(newMovie, testDb)
    const actual = await db.getOneMovie(id, testDb)

    expect(actual.id).toBe(9)
    expect(actual.title).toBe('New Movie')
    expect(actual.imdb_id).toBe('000000')
    expect(actual.watched).toBeFalsy()
    expect(actual.img).toBeNull()
    expect(actual.plot).toBe('Plot')
  })
})

describe('Delete movie', () => {
  test('Should successfully deletes a intended movie', async () => {
    await db.deleteMovie('tt2543164', testDb)
    const actual = await db.getOneMovie(2, testDb)

    expect(actual).toBeUndefined()
  })
})
