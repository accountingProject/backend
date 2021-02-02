'use strict'

// COMPONENTS
const customer = require('../components/customer/network')
const user = require('../components/user/network')

// DOCUMENT
// const postman = require('../api/postman')

// UTILS
// const errors = require('../network/errors')


const routes = (app) => {
    const customerRoute = () => app.use('/cliente', customer)
    const userRoute = () => app.use('/usuario', customer)
    // const documentRoute = () => app.use('/api-doc', postman)
    // const errorsRoute = () => app.use(errors)

    return {
        customerRoute,
        userRoute,
        // documentRoute,
        // errorsRoute
    }
}

module.exports = routes