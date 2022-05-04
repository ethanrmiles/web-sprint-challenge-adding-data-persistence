const express = require('express')
const Model = require('./model')
const { reconfigObjStructure } = require('../helpers/intBool')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        const projects = await Model.getProjects()
        res.json(projects)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res) => {
    if(!req.body.project_name){
        res.status(400).json({ message: "you must provide a project name"})
    }else {
        const newProj = await Model.postProjects(req.body)
        .then(creation => {
            const reconfig = reconfigObjStructure(creation)
            res.status(201).json(reconfig)
        })
    }
})

module.exports = router