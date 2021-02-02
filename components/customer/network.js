'use strict'

const express = require('express')
const router = express.Router()
const Controller = require('./index')

// Internal Functions
const list = (req, res) => {
    Controller.list()
    .then((listed) => {
        res.send(listed)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const get = (req, res) => {
    Controller.get(req.params.customer)
    .then((customer) => {
        res.send(customer)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const upsert = (req, res) => {
    Controller.upsert(req.body)
    .then((customer) => {
        res.send(customer)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const deleteCustomer = (req, res) => {
    Controller.get(req.params.customer)
    .then((customer) => {
        res.send(customer)
    })
    .catch((err) =>{
        console.error(err)
    })
}

// Routes
router.get('/', list)
router.get('/:customer', get)
router.post('/', upsert)
router.delete('/:customer', deleteCustomer)

module.exports = router