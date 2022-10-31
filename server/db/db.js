const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

function getOneMoive(imdbID, db = conn) {
  return db('movies').where('imdb_id', imdbID).select('watched')
}

// POST
function insertMovie(newMovie, db = conn) {
  return db('movies').insert(newMovie)
}

// TODO: UPDATE
function updateWatched(imdbID, booleanValue, db = conn) {
  return db('movies').where('imdb_id', imdbID).update({ watched: booleanValue })
}

// DELETE
function deleteMovie(imdbID, db = conn) {
  return db('movies').where('imdb_id', imdbID).delete()
}

module.exports = {
  getAllMovies,
  getOneMoive,
  insertMovie,
  updateWatched,
  deleteMovie,
}
