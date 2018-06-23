const http = require('http');
const api = require('./src/util/routes/api2');

const port = process.env.PORT || 3000;

const server = http.createServer(api);

server.listen(port);