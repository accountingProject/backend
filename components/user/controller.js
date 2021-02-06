'use strict'

module.exports = (store) => {
    const { User } = store.User

    const listUsers = async () => {
        const users = await User.listUsers()
        return users
    }

    const getUser = async (idUser) => {
        const user = await User.getUser(idUser)
        return user
    }

    const upsertUser =  async (bodyUser) => {

        const newUser = new User({
            document: bodyUser.document,
            name: bodyUser.name,
            lastname: bodyUser.lastname,
            contact: {
                email: bodyUser.contact.email,
                cellphone: bodyUser.contact.cellphone,
                phone: bodyUser.contact.phone
            },
            confidential: {
                password: bodyUser.confidential.password
            },
            access: {
                rol: bodyUser.access.rol
            }
        })

        const user = await User.upsertUser(newUser)
        return user
    }

    const deleteUser = async (idUser) => {
        const user = await store.deleteUser(idUser)
        return user
    }

    return {
        listUsers,
        getUser,
        upsertUser,
        deleteUser
    }
}