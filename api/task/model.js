const db = require('../../data/dbConfig')
const { reconfigTaskStructure } = require('../helpers/intBool')

function getTasks () {
    return db('projects')
    .innerJoin('tasks', 'projects.project_id','=', 'tasks.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
    .then(tasks => tasks.map(task => reconfigTaskStructure(task)))
}

function getById (task_id) {
    return db('tasks')
    .where('task_id', task_id)
    .first()
}

function postTasks (newTask){
    return db('tasks')
    .insert(newTask)
    .then(([task_id]) => getById(task_id));
}

function findExistingProjectId(project_id){
    return db('projects')
    .where('project_id', project_id)
    .first()
}

module.exports = {
    getTasks,
    postTasks,
    findExistingProjectId
}