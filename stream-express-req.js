var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.post('*', function (req, res) {
   req.pipe(fs.createWriteStream('ips.txt'));
   res.end('\n');
});
app.listen(3000);