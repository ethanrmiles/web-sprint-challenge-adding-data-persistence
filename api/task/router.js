const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('hey there from task!')
})

router.post('/', (req, res) => {
    res.send('hey there from task!')
})

module.exports = router