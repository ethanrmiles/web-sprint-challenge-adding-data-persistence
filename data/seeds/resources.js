/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
   {resource_name: 'Adobe Illustrator', resource_description: 'to create graphics'},
   {resource_name: 'Adobe XD', resource_description: 'to create wirefreames'},
   {resource_name: 'React', resource_description: 'state management of choice'}
  ]);
};
