
exports.up = function(knex) {
  return knex.schema.createTable('token', (table) =>{
    table.string('tokenHash').primary();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.integer('validTimeInSeconds').defaultTo(1800);

    table.string('doctorCpf').notNullable();
    table.foreign('doctorCpf').references('cpf').inTable('doctor');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('token');
};
