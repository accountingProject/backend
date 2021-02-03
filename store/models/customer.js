'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')
const { contactSchema } = require('./contact')
const { locationSchema } = require('./location')
const { dateSchema } = require('./date')

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
    contact: contactSchema,
    born: {
        type: Date,
        required: true 
    },
    location: locationSchema,
    process: {
        type: String,
        enum: ['VISITA','AGENDAMIENTO','LLAMAR A COORDINADOR','DIGITAL','POR DEFINIR','SIN INTERES'],
        required: true 
    },
    date: dateSchema,
    userID: {
        type: String,
        required: true 
    }
})

module.exports = model( customerSchema )