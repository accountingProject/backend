'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const { config } = require('./config/config')

const app = express()

// MIDDLEWARES
app.use(bodyParser.json())

// ROUTE
app.get('/prosquad', (req, res) => {
    res.send('Me caen gordos')
})

// SERVER
app.listen(config.port, () => {
    console.log(`||ON||${config.apiUrl}${config.port}`)
})