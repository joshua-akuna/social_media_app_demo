// defines a node http server
const http = require('http')
const server = require('./server')
const port = process.env.PORT || 3100

http.createServer(server)

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})