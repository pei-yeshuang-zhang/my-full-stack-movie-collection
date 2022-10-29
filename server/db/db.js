const conn = require('./connection')

// GET
function getAllMovies(db = conn) {
  return db('movies').select()
}

// POST
function insertMovie(newMovie, db = conn) {
  return db('movies').insert(newMovie)
}

// TODO: UPDATE
function updateWatched(imdbID, booleanValue, db = conn) {
  return db('movies')
    .where('movie.imdb_id', imdbID)
    .update({ watched: booleanValue })
}

// DELETE
function deleteMovie(imdbID, db = conn) {
  console.log('in db.delete ', imdbID)
  return db('movies').where('movie.imdb_id', imdbID).delete()
}

module.exports = {
  getAllMovies,
  insertMovie,
  updateWatched,
  deleteMovie,
}
