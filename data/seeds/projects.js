/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'RP1 Calculator', project_description: 'A unique ui to quickly calculate 1 rep max', project_completed: 0}
  ]);
};
