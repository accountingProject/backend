'use strict'

const express = require('express')
const router = express.Router()
const Controller = require('./index')

// Internal Functions
const listUsers = (req, res) => {
    Controller.listUsers()
    .then((users) => {
        res.send(users)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const getUser = (req, res) => {
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
    Controller.deleteUser(req.params.user)
    .then((user) => {
        res.send(user)
    })
    .catch((err) =>{
        console.error(err)
    })
}

// Routes
router.get('/', listUsers)
router.get('/:user', getUser)
router.post('/', upsert)
router.delete('/:user', deleteUser)

module.exports = router