const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

// POST
function insertMovie(newMoive, db = conn) {
  return db('movies').insert(newMoive)
}

// UPDATE
function updateWatched(imdbID, booleanValue, db = conn) {
  return db('movies')
    .where('movie.imdb_id', imdbID)
    .update({ watched: booleanValue })
}

module.exports = {
  getAllMovies,
  insertMovie,
  updateWatched,
}
