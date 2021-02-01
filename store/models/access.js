'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let accessSchema = new Schema({
    rol: {
        type: String,
        required: true
    }
})

module.exports = model( accessSchema )