// Update with your config settings.
const { password, host, user, database } = require('./.env')

module.exports = {
    client: 'mysql',
    connection: {
      host,
      password,
      database,
      user,
      port: 3306
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
