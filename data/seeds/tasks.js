/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
   {task_description: 'Wireframes', task_notes:'Finish the mockups + all possible pages', task_completed: 0, project_id: 1},
   {task_description: 'Graphics', task_notes:'Vector barbell & plates', task_completed: 1, project_id: 1},
   {task_description: 'Code', task_notes:'Code web app', task_completed: 0, project_id: 1},
  ]);
};
