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

router.post('/', async(req, res) => {
    const existingDbResource = await Model.findExistingResource(req.body.resource_name)
    if(existingDbResource){
        res.status(400).json({ message: 'this resource already exists'})
    }else{
        const newResource = await  Model.postResources(req.body)
        res.status(201).json(newResource)
    }



  
})

module.exports = router