var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(fs.createWriteStream('ips.txt'));
    }
    res.end('\n');
});
server.listen(3000);