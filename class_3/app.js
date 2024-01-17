const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')

// Config

const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`listening on port: http://localhost:${PORT}`)
})

// Routes management

app.use(express.json()) // middleware to get req.body data

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieWithId = movies.find(movie => movie.id === id)
  if (movieWithId) return res.json(movieWithId)
  res.status(404).json({ message: `Not found a movie with id:${id}` })
})

app.post('/movies', (req, res) => {
  const {
    title,
    genre,
    year,
    director,
    duration,
    rate,
    poster
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(),
    title,
    genre,
    year,
    director,
    duration,
    rate: rate ?? 0,
    poster

  }
  movies.push(newMovie)

  res.status(201).json(newMovie)
})
