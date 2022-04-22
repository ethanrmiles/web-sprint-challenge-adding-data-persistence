const express = require('express')

const router = express.Router()

const projectRouter = require('./project/router')
const resoureRouter = require('./resource/router')
const taskRouter = require('./task/router')

router.use('/project', projectRouter)
router.use('/resource', resoureRouter)
router.use('/task', taskRouter)

module.exports = router