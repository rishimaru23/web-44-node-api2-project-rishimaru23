// require your server and launch it here
const server = require('./api/server')

const port = 2000

server.listen(port, () => {
    console.log(`listening on ${port}`)
})