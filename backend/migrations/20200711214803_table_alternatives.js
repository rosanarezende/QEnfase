
exports.up = function(knex) {
    return knex.schema.createTable('alternatives', table => {
        table.increments('id').primary()
        table.integer('num').notNull()
        table.text('text').notNull()
        table.integer('question_id').unsigned()
        table.foreign('question_id').references('questions.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alternatives')
};
