const express = require('express')
const Model = require('./model')
const projModel = require('../project/model')
const { reconfigTaskStructure } = require('../helpers/intBool')
const { checkProjectId, checkPayload } = require('../helpers/middlewear')

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

router.post('/',  checkPayload, async(req, res, next) => {
    
    //  const newTask = await Model.postTasks(req.body)
    // .then(creation => {
    //     const reconfig = reconfigTaskStructure(creation)
    //     res.status(201).json(reconfig)
    // })
    // .catch(err => {
    //     next(err)
    // })

    Model.postTasks(req.body)
    .then(newTask => {
            const reconfig = reconfigTaskStructure(newTask)
                res.status(201).json(reconfig)
    })
    .catch(err => {
        next(err)
    })
    
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 400).json({ message: err.message })
  })


module.exports = router