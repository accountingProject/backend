'use strict'

const Mongoose = require('mongoose')
let mongoose = null

module.exports = function setupDatabase (config) {
    if (!mongoose){
        Mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@manager.6or1b.mongodb.net/${config.dbName}?retryWrites=true&w=majority`, () => {
        console.log('||DB||ON||')
        })
    }
    return mongoose
}


