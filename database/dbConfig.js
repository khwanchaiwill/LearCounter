require('dotenv').config();
const knex = require("knex")

const config = require("../knexfile")

const environment = process.env.DB_ENV || "development"

module.exports = knex(config[environment])