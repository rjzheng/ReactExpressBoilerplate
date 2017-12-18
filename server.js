// Import libraries
var express = require('express');

// Create express app
var app = express();
// Set the server url
const ROOT_URL = 'localhost';
// Use the environment's port, 8080 ass the default port
var PORT = process.env.PORT || 8080;
// App/server configuration
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', ROOT_URL);
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  if(req.headers['x-forwarded-proto'] === 'http') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Connect local directory
app.use(express.static('public'));

// Start server at IP:PORT
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

// REST GET requests
app.get('',function(req,res){
  // res.send();
});

// REST POST requests
app.post("", function(req, res) {
  // Store variable values
  // req.body.***

  // res.send();
});
