const http = require('http');
const host = "127.0.0.1";
const port = 3002;

// request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {
    response.statusCode = 203;
    response.end('Hello world!');
});

server.listen(port, host, '', function () {
    console.log(`server berhasil running di host : ${host} port : ${port}`);
});




