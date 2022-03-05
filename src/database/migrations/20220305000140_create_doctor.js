
exports.up = function(knex) {
  return knex.schema.createTable('doctor', (table) =>{
      table.string('cpf').primary();
      table.string('name').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('doctor');
};
