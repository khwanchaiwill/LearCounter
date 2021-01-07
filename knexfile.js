// Update with your config settings.
require("dotenv").config();
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/count"
// const { pgConnection } = require("./config/vars")

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/count.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: "./database/count.db3"
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   }
  // },
  
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
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
    directory: "./database/migrations",
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
