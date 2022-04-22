/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resource-assignment').del()
  await knex('resource-assignment').insert([
    {project_id: 1, resource_id: 1}
  ]);
};
