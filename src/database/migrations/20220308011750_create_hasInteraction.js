
exports.up = function(knex) {
  return knex.schema.createTable('hasInteraction', (table) =>{
    table.integer('id').notNullable();
    table.string('cpf').notNullable();

    table.foreign('id').references('id').inTable('interaction');
    table.foreign('cpf').references('cpf').inTable('patient');

    table.primary(['id', 'cpf']);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('hasInteraction');
};
