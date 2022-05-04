function intToBoolean(int) {
  if(int === 0 || int === null || int === undefined){
    return false
  }else if(int === 1){
    return true
  }
  
}

function reconfigObjStructure(project) {
  return {
    ...project,
    project_completed: intToBoolean(project.project_completed),
  }
}

function reconfigTaskStructure(task){
  return {
    ...task,
    task_completed: intToBoolean(task.task_completed),
  }
}

module.exports = {
  reconfigObjStructure,
  reconfigTaskStructure
}