const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        const project = await Model.getProjects()
        res.json(project)
    }catch(err){
        next(err)
    }
})

router.post('/', (req, res) => {
    res.send('hey there from project!')
})

module.exports = router