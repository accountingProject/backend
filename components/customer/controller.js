'use strict'

module.exports = (store) => {
    const { Customer } = store.Customer


    const listCustomers = async () => {
        const customers = await Customer.listCustomers()
        return customers
    } 

    const getCustomer = async (idCustomer) => {
        const customer = await Customer.getCustomer(idCustomer)
        return customer
    }

    const upsertCustomer = async (bodyCustomer) => {

        const newCustomer = new Customer({
            document: bodyCustomer.document,
            name: bodyCustomer.name,
            lastname: bodyCustomer.lastname,
            contact: {
                email: bodyCustomer.contact.email,
                cellphone: bodyCustomer.contact.cellphone,
                phone: bodyCustomer.contact.phone
            },
            born: bodyCustomer.born,
            location: {
                area: bodyCustomer.location.area,
                town: bodyCustomer.location.town,
                institute: bodyCustomer.location.institute,
                address: bodyCustomer.location.address
            },
            process: bodyCustomer.process,
            date: bodyCustomer.date
        })
        const customer = await Customer.upsertCustomer(newCustomer)
        return customer
    }

    const deleteCustomer = async (idCustomer) => {
        const customer = await Customer.deleteCustomer(idCustomer)
        return customer
    }

    return {
        listCustomers,
        getCustomer,
        upsertCustomer,
        deleteCustomer
    }
}