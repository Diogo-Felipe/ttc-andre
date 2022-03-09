// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    migrations: {
      directory: './src/database/migrations'
    },
    connection: {
      host: 'ec2-52-44-209-165.compute-1.amazonaws.com',
      database: 'd6vd9bco3djo9',
      user:     'pmferwaskawylm',
      password: '5251b1096952821d49f503b8a3c86776b7d16af22ddc09a3b9faec8dd566fd74'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
