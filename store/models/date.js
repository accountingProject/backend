'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let dateSchema = new Schema({
    dateTo: {
        type: Date,
        required: true
    }
})

module.exports = model( dateSchema )