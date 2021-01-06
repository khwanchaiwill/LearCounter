const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const counterRouter = require("../counter/counter-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/count", counterRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" })
})

module.exports = server