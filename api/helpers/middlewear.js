const db = require('../../data/dbConfig')
async function checkProjectId (req, res) {
    try{
        const projects = await db('projects')
        const payload = req.body.project_id
        let validPayload = true
        if(payload > projects.length || payload === undefined){
             validPayload = false
             res.status(400).json({ message: 'must give a valid project id'})
        }
    }catch(err){
        console.log(err)
    }
}

function checkPayload (req,res, next){
    if(!req.body.task_description || !req.body.task_description.trim() ){
        next({ message: "you must provide a task description", status: 400})
    }else if(!req.body.project_id){
        next({ message: "you must provide a project id", status: 400})
    }else{
        req.body.task_description = req.body.task_description.trim()
        next()
    }
}

module.exports = {
    checkPayload,
    checkProjectId
}