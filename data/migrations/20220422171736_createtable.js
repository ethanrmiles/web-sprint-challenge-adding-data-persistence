/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', t => {
        t.increments('project_id')
        t.string('project_name').notNullable()
        t.string('project_description')
        t.integer('project_completed')
    })
  .createTable('resources', t => {
    t.increments('resource_id')
    t.string('resource_name').unique().notNullable()
    t.string('resource_description')
  })
  .createTable('tasks', t => {
      t.increments('task_id')
      t.string('task_description').notNullable()
      t.string('task_notes')
      t.integer('task_completed')
      t.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects')
  })
  .createTable('resource-assignment', t => {
      t.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects')
      t.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resources')
      t.primary(['project_id', 'resource_id'])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resource-assignment')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
