const express = require('express')
const Model = require('./model')
const projModel = require('../project/model')
const { reconfigTaskStructure } = require('../helpers/intBool')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        const task = await Model.getTasks()
    res.json(task)
    }catch(err){
        next(err)
    }
})

// !existingProjectId
// !req.body.task_description

router.post('/', async(req, res) => {
    const existingProjectId = await Model.findExistingProjectId(req.body.project_id)
    if(!req.body.task_description){
        res.status(400).json({ message: "you must provide a task description"})
    }else if(!req.body.project_id){
        res.status(400).json({ message: "you must provide a project id"})
    }else if(!existingProjectId){
        res.status(400).json({ message: "you must provide a valid project id"})
    }else{
        const newTask = await Model.postTasks(req.body)
    .then(creation => {
        const reconfig = reconfigTaskStructure(creation)
        res.status(201).json(reconfig)
    })
    }
})

// async function getProj (num){
//     const projs = await projModel.getProjects()
//         projs.some(proj => {
//         if(proj.project_id === num){
//             return true
//         }
//     })
// }

// getProj(2).then(res => {
//     console.log(res)
// })


module.exports = router