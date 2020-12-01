const express = require('express')

const routes = require('./routes/test.route')

const app = express()
app.use('/test', routes)

app.get('/', function (req, res) {
  res.send('Hello world')
})

module.exports = app
