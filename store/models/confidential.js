'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

module.exports = function setupConfidentialSchema() {
    let confidentialSchema = new Schema({
        password: {
            type: String,
            required: true
        }
    })
    
    return model('confidential', confidentialSchema )
}