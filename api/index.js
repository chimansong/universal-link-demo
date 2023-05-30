var express = require('express');
var server = express();

server.get('/apple-app-site-association', function(request, response) {
  response.set('Content-Type', 'application/json')
  response.sendFile(__dirname +  '/apple-app-site-association');
});

server.get('/home', function(request, response) {
  console.log('hit /home');
  response.sendFile(__dirname +  '/home.html');
});

server.get('/about', function(request, response) {
  response.sendFile(__dirname +  '/about.html');
});

server.get('/goods*', function(request, response) {
  response.sendFile('/goods.html');
});

server.get('/collections*', function(request, response) {
  response.sendFile(__dirname +  '/collections.html');
});

server.get('/categories*', function(request, response) {
  response.sendFile(__dirname +  '/categories.html');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});