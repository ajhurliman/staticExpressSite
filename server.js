//Written by ajHurliman during CodeFellows javascript dev accelerator
//10-31-2014

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/promissoryNote', function(req, res) {

});

app.listen(8080);
