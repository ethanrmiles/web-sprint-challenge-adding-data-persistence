const db = require('../../data/dbConfig')

function getProjects () {
    return db('projects')
}

function postProjects() {

}

module.exports = {
    getProjects,
    postProjects
}