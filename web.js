var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var infile = "index.html";
var out = fs.readFileSync(infile);
var outstring = out.toString('utf-8');

app.get('/', function(request, response) {
  response.send(outstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
