'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let userSchema = new Schema({
    document: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true 
    },
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
    },
    confidentialID: {
        type: String,
        required: true 
    },
    accessID: {
        type: String,
        required: true 
    }
})

module.exports = model( userSchema )