const db = require('../../data/dbConfig')

function getResources () {
    return db('resources')
    console.log('getResources hit')
}

function postResources () {
    
}

module.exports = {
    getResources, 
    postResources
}