'use strict'

const mongoose = require('mongoose')
const { config } = require('../config/config')


mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@manager.6or1b.mongodb.net/${config.dbName}?retryWrites=true&w=majority`, () => {
    console.log('||DB||ON||')
})