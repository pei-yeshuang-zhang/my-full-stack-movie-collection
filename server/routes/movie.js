const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET - /api/vi/movies
router.get('/', async (req, res) => {
  try {
    const moviesArr = await db.getAllMovies()
    res.json(moviesArr)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

// POST
router.post('/', async (req, res) => {
  // The two lines below are to test if it's working (being console logged in terminal, not in browser)
  // console.log('POST ROUTE:', req.body)
  // res.sendStatus(200)
  try {
    const idArr = await db.insertMovie(req.body)
    const newObj = {
      id: idArr[0],
      ...req.body,
      watched: false,
    }
    res.json(newObj)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

// PATCH
router.patch('/:imdbID', async (req, res) => {
  const imdbID = req.params.imdbID
  const watched = await db.getOneMovie(imdbID) // watched : {watched: 0}
  console.log('in routes watched', watched)
  res.sendStatus(200)
  if (watched) {
    try {
      res.json({ watched: !watched })
    } catch (err) {
      res.status(500).json({ msg: err.message })
    }
  }
})

// DELETE
router.delete('/:imdbID', async (req, res) => {
  try {
    const removed = await db.deleteMovie(req.params.imdbID)
    res.json(removed)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router
