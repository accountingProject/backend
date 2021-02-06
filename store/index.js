'use strict'

// MODELS

// const setupAccessSchema = require('./models/access')
// const setupConfidentialSchema = require('./models/confidential')
// const setupContactSchema = require('./models/contact')
// const setupLocationSchema = require('./models/location')
// const setupDateSchema = require('./models/date')
const setupCustomerSchema = require('./models/customer')
const setupUserSchema = require('./models/user') 

// 

// const accessModel = setupAccessSchema()
// const confidentialModel = setupConfidentialSchema()
// const contactModel = setupContactSchema()
// const locationModel = setupLocationSchema()
// const dateModel = setupDateSchema()
const customerModel = setupCustomerSchema()
const userModel = setupUserSchema()

// LIB

// const setupDate = require('./lib/date')
const setupCustomer = require('./lib/customer')
const setupUser = require('./lib/user')

//

// const Date = setupDate()
const Customer = setupCustomer(customerModel)
const User = setupUser(userModel)

module.exports = {
    Customer,
    User
}