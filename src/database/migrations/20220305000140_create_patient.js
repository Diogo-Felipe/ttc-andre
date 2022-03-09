
exports.up = function(knex) {
  return knex.schema.createTable('patient', (table) =>{
      table.string('cpf').primary();
      table.string('name').notNullable();
      table.string('responsibleName').notNullable();
      table.string('gender');
      table.string('doctorCpf').notNullable();
      table.foreign('doctorCpf').references('cpf').inTable('doctor');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('patient');
};
