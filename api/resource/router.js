const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        const resource = await Model.getResources()
        res.json(resource)
    }catch(err){
        next(err)
    }
})

router.post('/', (req, res) => {
    res.send('hey there from resource!')
})

module.exports = router