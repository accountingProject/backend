'use strict'

module.exports = (store) => {
    const list = () => {
        return 'Hola desde el controlador'
    }

    const get = (customer) => {
        return customer
    }

    const upsert = (customer) => {
        return customer
    }

    const deleteCustomer = (customer) => {
        return customer
    }

    return {
        list,
        get,
        upsert,
        deleteCustomer
    }
}