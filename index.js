const http = require('http');
const rupiah = require('rupiah-format');
const host = "127.0.0.1";
const port = 3002;

// request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "Thomas Ardiansah";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    // const sisaRupiah = rupiah.convert(sisa);
    // console.log('', sisaRupiah);

    const hasil = `
    <head>
        <title>NODE JS BEGINNER</title>
    </head>
    <body>
        
        <h1 style="background: black; color: white; padding: 20px; text-align: center">Ini Beginner Node</h1>

        <p>hallo nama saya ${nama} saya jajan sebanyak ${jajan}, semula uang saya ${uang}, sekarang sisa ${sisa}</p>

    </body>`;

    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server berhasil running di host : ${host} port : ${port}`);
});




