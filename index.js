require("dotenv").config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 4800

server.listen(PORT, () => {
  console.log(`\n Listening on port ${PORT}... \n`)
})