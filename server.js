// creates an express server
const express = require('express')
const server = express()
const cors = require('cors')

// use middleware
server.use(express.json())
server.use(cors({
    origin: '*'
}))

server.get('/', (req, res)=>{
    res.end('Hello, World')
})

module.exports = server