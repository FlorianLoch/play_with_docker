var os = require("os");
var app = require("express")();

var networkInterfaces = os.networkInterfaces();

app.get("/", function (req, res) {
  console.log("Received request!");
  console.log(req.ips);
  res.send(networkInterfaces);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
