var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express()

app.get('*', function (req, res) {
    fs.createReadStream('users.csv').pipe(res);
});

app.listen(3000);