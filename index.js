const http = require('http');
const Routes = require('./routes');

const PORT = 3000;


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);

server.listen(PORT, 'localhost', (err) => {
    err ? console.log(err): console.log('listening...')
});