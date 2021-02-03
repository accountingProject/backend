'use strict'

const store = require('../../store/index')
const controller = require('./controller')

module.exports = controller(store)