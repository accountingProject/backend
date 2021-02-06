'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

module.exports = function setupdateSchema() {
    let dateSchema = new Schema({
        process: {
            type: String,
            enum: ['VISITA','AGENDAMIENTO','LLAMAR A COORDINADOR','DIGITAL','POR DEFINIR','SIN INTERES'],
            required: true 
        },
        date: {
            type: Date,
            required: true
        },
        customerID: {
            type: String,
            required: true 
        },
        userID: {
            type: String,
            required: true 
        }
    })
    
    return model('date', dateSchema )
}