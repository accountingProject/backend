'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('./config/config')
const routes = require('./routes/routes')

const app = express()

// MIDDLEWARES
app.use(bodyParser.json())

// ROUTE
app.get('/prosquad', (req, res) => {
    res.send('Me caen gordos')
})
routes(app).customerRoute()
routes(app).userRoute()
// routes(app).documentRoute()
// routes(app).errorsRoute()

mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@manager.6or1b.mongodb.net/${config.dbName}?retryWrites=true&w=majority`, () => {
    console.log('||DB||ON||')
})

// SERVER
app.listen(config.port, () => {
    console.log(`||API||ON||${config.apiUrl}${config.port}`)
})