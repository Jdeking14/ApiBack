const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
  res.send('Primera ruta de la API')
})

router.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const results = await db.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [username, password])
    if (results.length > 0) {
      const user = {
        id: results[0].id,
        user: results[0].user,
        username: results[0].username
      }
      res.status(200).json(user)
    } else {
      res.status(400).send('El usuario no existe')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
