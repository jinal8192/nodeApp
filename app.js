// Modules - Encapsulated code(only share minimum)

const http = require('http')

const server = http.createServer((req, res) => {
    res.write("our first home page");
    res.end()
})

server.listen(5000)