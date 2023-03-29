const http = require('http');

// request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {
    response.end('Hello world!');
});

server.listen(3001, '127.0.0.1', '', function () {
    console.log('server berhasil running');
});




