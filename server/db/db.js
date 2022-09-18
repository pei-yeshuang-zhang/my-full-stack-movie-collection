const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

module.exports = {
  getAllMovies,
}
