var express = require('express')
var app = express()

app.get('/websocket', function (req, res) {
  res.send('Hello NodeJS')
})

var server = app.listen(8080, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })