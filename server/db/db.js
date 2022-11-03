const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

function getOneMovie(imdbID, db = conn) {
  return db('movies').where('imdb_id', imdbID).select('watched') // return a boolean
}

// POST
function insertMovie(newMovie, db = conn) {
  return db('movies').insert(newMovie)
}

// TODO: UPDATE (Not in use)
function updateWatched(imdbID, booleanValue, db = conn) {
  return db('movies').where('imdb_id', imdbID).update({ watched: booleanValue })
}

// DELETE
function deleteMovie(imdbID, db = conn) {
  return db('movies').where('imdb_id', imdbID).delete()
}

module.exports = {
  getAllMovies,
  getOneMovie,
  insertMovie,
  updateWatched,
  deleteMovie,
}
