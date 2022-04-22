const db = require('../../data/dbConfig')

function getResources () {
    return db('resources')
}

function postResources () {
    
}

module.exports = {
    getResources, 
    postResources
}