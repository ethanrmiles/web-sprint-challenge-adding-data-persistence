const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('hey there from resource!')
})

module.exports = router