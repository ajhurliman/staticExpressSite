var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/promissoryNote', function(req, res) {

});

app.listen(8080);
