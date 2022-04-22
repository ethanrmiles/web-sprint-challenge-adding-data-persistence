const express = require('express')

const router = express.Router()

const projectRouter = require('./project/router')
const resoureRouter = require('./resource/router')
const taskRouter = require('./task/router')

router.use('/projects', projectRouter)
router.use('/resources', resoureRouter)
router.use('/tasks', taskRouter)

module.exports = router