
require("dotenv").config();

module.exports = {
  pgConnection: process.env.DATABASE_URL || "postgres://postgres:s115115744@localhost:5432/my_counter"
}