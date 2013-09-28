var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.createReadStream('users.csv').pipe(res);
});
server.listen(3000);