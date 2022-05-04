const db = require('../../data/dbConfig')
const { reconfigObjStructure } = require('../helpers/intBool')

function getProjects () {
    return db('projects')
    .then(projs => projs.map(proj => 
        reconfigObjStructure(proj)))

}

function getById (project_id) {
    return db('projects')
    .where('project_id', project_id)
    .first()
}

function postProjects(newProj) {
    return db('projects')
    .insert(newProj)
    .then(([project_id]) => getById(project_id));
}

module.exports = {
    getProjects,
    postProjects
}