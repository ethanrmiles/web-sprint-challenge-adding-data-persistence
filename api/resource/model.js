const db = require('../../data/dbConfig')

function getResources () {
    return db('resources')
}

 function getById (resource_id) {
    return db('resources')
    .where('resource_id', resource_id)
    .first()
}

function postResources (newResource) {
    return db('resources')
    .insert(newResource)
    .then(([resource_id]) => getById(resource_id));
}

function findExistingResource(resource_name){
    return db('resources')
    .where('resource_name', resource_name)
    .first()
}

module.exports = {
    getResources, 
    postResources,
    findExistingResource
}