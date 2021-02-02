'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')
const { confidentialSchema } = require('./confidential')
const { accessSchema } = require('./access')
const { contactSchema } = require('./contact')

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
    contact: contactSchema,
    confidential: confidentialSchema,
    accessID: accessSchema
})

module.exports = model( userSchema )