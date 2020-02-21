var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
    fs.readFile('./netflix.json', function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(data);
        }else{
            throw err;
        }
    })
})

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

})