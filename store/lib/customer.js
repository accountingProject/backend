'use strict'

module.exports = function setupCustomer(customerModel) {

    const listCustomers = async () => {
        return await customerModel.find()
    }

    const getCustomer = async (idCustomer) => {
        return await customerModel.findById(idCustomer) 
    }

    const upsertCustomer = async (newCustomer) => {

        return await customerModel.create(newCustomer)

        // const alreadyExist = await customerModel.findById(bodyCustomer.id)

        // if (alreadyExist) {
        //     const updated = await userModel.update(user)
        //     return updated ? userModel.findOne(user.id) : alreadyExist
        // } else {
        //     const created = await userModel.create(user)
        //     return created.toJSON()
        // } 
    }

    const deleteCustomer = async (idCustomer) => {
        return await customerModel.remove(idCustomer)
    }

    return {
        listCustomers,
        getCustomer,
        upsertCustomer,
        deleteCustomer
    }
}