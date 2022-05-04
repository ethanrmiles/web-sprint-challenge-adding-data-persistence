const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        const task = await Model.getTasks()
    res.json(task)
    }catch(err){
        next(err)
    }
})

router.post('/', (req, res) => {
    res.send('hey there from task!')
})

module.exports = router