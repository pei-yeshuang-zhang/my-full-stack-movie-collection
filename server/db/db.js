const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

function getOneMovie(id, db = conn) {
  return db('movies').where('id', id).select().first()
}

// POST
function insertMovie(newMovie, db = conn) {
  return db('movies').insert(newMovie)
}

// TODO: UPDATE (Not in use)
function updateWatched(imdbID, data, db = conn) {
  return db('movies').where('imdb_id', imdbID).update(data)
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
