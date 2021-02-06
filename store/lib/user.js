'use strict'

module.exports = function setupUser(userModel) {

    const listUsers = async () => {
        return await userModel.find()
    }

    const getUser = async (idUser) => {
        return await userModel.findById(idUser)
    }

    const upsertUser = async (newUser) => {

        return await userModel.create(newUser)

        // const alreadyExist = await userModel.findById(bodyUser.id)

        // if (alreadyExist) {
        //     const updated = await userModel.update(user)
        //     return updated ? userModel.findOne(user.id) : alreadyExist
        // } else {
        //     const created = await userModel.create(user)
        //     return created.toJSON()
        // } 
    }

    const deleteUser = async (idUser) => {
        return await userModel.remove(idUser)
    }

    return {
        listUsers,
        getUser,
        upsertUser,
        deleteUser
    }
}