
exports.up = function(knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary()
        table.text('ask').notNull()
        table.integer('correct').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions')
};
