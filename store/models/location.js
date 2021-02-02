'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let locationSchema = new Schema({
    address: {
        type: String,
        required: true 
    },
    institute: {
        type: String,
        required: true 
    },
    town: {
        type: String,
        required: true 
    },
    area: {
        type: String,
        required: true 
    }
})

module.exports = model( locationSchema )

