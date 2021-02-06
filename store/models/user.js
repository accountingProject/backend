'use strict'

const { Schema } = require('mongoose')
const { model } = require('mongoose')

module.exports = function setupUserSchema () {
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
        confidential: {
            password: {
                type: String,
                required: true
            }
        },
        access : {
            rol: {
                type: String,
                required: true
            }
        }
    })

    return model('user', userSchema )
}