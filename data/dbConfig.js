// No need to change this file
const knex = require('knex');
// const { development } = require('../knexfile.js');
const configurations = require('../knexfile.js');
// const environment = process.env.NODE_ENV || 'development';

// What knex configuration is actually used?
// That depends on the value of process.env.NODE_ENV!
// module.exports = knex(configurations[development]);
module.exports = knex(configurations.development)
