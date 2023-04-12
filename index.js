const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

// routes
app.use('/', routes)

// start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
