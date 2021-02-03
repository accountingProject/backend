'use strict'

// const setupDatabase = require('./lib/db')

// MODELS

// const accessModel = require('./models/access')
// const confidentialModel = require('./models/confidential')
// const contactModel = require('./models/contact')
const customerModel = require('./models/customer')
// const dateModel = require('./models/date')
// const locationModel = require('./models/location')
const userModel = require('./models/user')

// LIB

// const setupAccess = require('./lib/access')
// const setupConfidential = require('./lib/confidential')
// const setupContact = require('./lib/contact')
const setupCustomer = require('./lib/customer')
// const setupDate = require('./lib/date')
// const setupLocation = require('./lib/location')
const setupUser = require('./lib/user')

// SETUP LIB METHODS

const Customer = setupCustomer(customerModel)
const User = setupUser(userModel)

module.exports = {
    Customer,
    User
}