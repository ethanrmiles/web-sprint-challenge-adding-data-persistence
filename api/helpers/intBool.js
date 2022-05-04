function intToBoolean(int) {
  return int === 1 ? true : false
  
}

function reconfigObjStructure(project) {
  return {
    ...project,
    project_completed: intToBoolean(project.completed),
  }
}

module.exports = {
  reconfigObjStructure
}