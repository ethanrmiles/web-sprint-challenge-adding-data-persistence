const express = require('express')
const helmet = require('helmet')
const mainRouter = require('./mainRouter')

const server = express()
server.use(express.json())
server.use('/api', mainRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
  module.exports = server;