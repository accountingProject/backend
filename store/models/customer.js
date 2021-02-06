'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

module.exports = function setupCustomerSchema() {
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
        contact: {
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
        },
        born: {
            type: Date,
            required: true 
        },
        location: {
            area: {
                type: String,
                required: true 
            },
            town: {
                type: String,
                required: true 
            },
            institute: {
                type: String,
                required: true 
            },
            address: {
                type: String,
                required: true 
            }
        }
    })
    
    return model('customer', customerSchema )
}