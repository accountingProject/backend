'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

module.exports = function setupLocationSchema() {
    let locationSchema = new Schema({
        area: {
            type: String,
            required: true 
        },
        town: {
            type: String,
            required: true 
        },
        institute: {
            type: String,
            required: true 
        },
        address: {
            type: String,
            required: true 
        }
    })

    return model('location', locationSchema )
}

