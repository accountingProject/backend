'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let contactSchema = new Schema({
    email: {
        type: String,
        required: true 
    },
    cellphone: {
        type: String,
        required: true 
    },
    phone: {
        type: String,
        required: true 
    }
})

module.exports = model( contactSchema )