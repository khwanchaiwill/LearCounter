
require("dotenv").config();

module.exports = {
  pgConnection: process.env.DATABASE_URL || "postgresql://postgres@localhost/count"
}