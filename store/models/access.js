'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

module.exports = function setupAccessSchema() {
    let accessSchema = new Schema({
        rol: {
            type: String,
            required: true
        }
    })
    
    return model('access', accessSchema )
}