const db = require('../../data/dbConfig')
const { reconfigTaskStructure } = require('../helpers/intBool')

function getTasks () {
    return db('projects')
    .innerJoin('tasks', 'projects.project_id','=', 'tasks.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
    .then(tasks => tasks.map(task => reconfigTaskStructure(task)))
}

function getById (resource_id) {
    return db('resources')
    .where('resource_id', resource_id)
    .first()
}

function postTasks (newTask){

}

module.exports = {
    getTasks,
    postTasks
}