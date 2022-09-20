const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

// POST
function insertMovie(newMoive, db = conn) {
  return db('movies').insert(newMoive)
}

module.exports = {
  getAllMovies,
  insertMovie,
}
