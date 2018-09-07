var express = require('express');
var app = express();

app.get('/redbuspoolmap', function (req, res) {
    console.log(`redbuspoolmap`);
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/*', function (req, res) {
    res.send('ok');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});