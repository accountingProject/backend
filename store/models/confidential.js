'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let confidentialSchema = new Schema({
    password: {
        type: String,
        required: true
    }
})

module.exports = model( confidentialSchema )