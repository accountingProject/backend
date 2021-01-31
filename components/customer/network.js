'use strict'

const express = require('express')
const router = express.Router()

// Internal Functions
const list = (req, res) => {
    res.send('lista todos los clientes')
}

const get = (req, res) => {
    const customer = req.params.customer
    res.send(`lista al cliente ${customer}`)
}

const upsert = (req, res) => {
    res.send('crea o edita un usuario')
}

// Routes
router.get('/', list)
router.get('/:customer', get)
router.post('/', upsert)

module.exports = router