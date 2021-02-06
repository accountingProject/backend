'use strict'

const express = require('express')
const router = express.Router()
const Controller = require('./index')

// Internal Functions
const listCustomer = (req, res) => { 
    Controller.listCustomer()
    .then((customers) => {
        res.send(customers)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const getCustomer = (req, res) => {
    Controller.getCustomer(req.params.customer)
    .then((customer) => {
        res.send(customer)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const upsertCustomer = (req, res) => {
    Controller.upsertCustomer(req.body)
    .then((customer) => {
        res.send(customer)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const deleteCustomer = (req, res) => {
    Controller.deleteCustomer(req.params.customer)
    .then((customer) => {
        res.send(customer)
    })
    .catch((err) =>{
        console.error(err)
    })
}

// Routes
router.get('/', listCustomer)
router.get('/:customer', getCustomer)
router.post('/', upsertCustomer)
router.delete('/:customer', deleteCustomer)

module.exports = router