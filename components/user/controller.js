'use strict'

module.exports = (store) => {
    const list = () => {
        return 'Hola desde el controlador'
    }

    const get = (user) => {
        return user
    }

    const upsert = (user) => {
        return user
    }

    const deleteUser = (user) => {
        return user
    }

    return {
        list,
        get,
        upsert,
        deleteUser
    }
}