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
    Controller.get(req.params.user)
    .then((user) => {
        res.send(user)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const upsert = (req, res) => {
    Controller.upsert(req.body)
    .then((user) => {
        res.send(user)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const deleteUser = (req, res) => {
    Controller.get(req.params.user)
    .then((user) => {
        res.send(user)
    })
    .catch((err) =>{
        console.error(err)
    })
}

// Routes
router.get('/', list)
router.get('/:user', get)
router.post('/', upsert)
router.delete('/:user', deleteUser)

module.exports = router