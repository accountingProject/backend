'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

let customerSchema = new Schema({
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
    address: {
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
    born: {
        type: Date,
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
    },
    process: {
        type: String,
        required: true 
    },
    dateID: {
        type: String,
        required: true 
    },
    userID: {
        type: String,
        required: true 
    }
})

module.exports = model( customerSchema )