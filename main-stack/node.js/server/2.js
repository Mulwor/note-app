const http = require("http");
 
const server =  http.createServer(function(request, response) {
  console.log("Server start work");

  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.write('<h1>Hello world - 1</h1>');
  response.write('<h2>Hello world - 2</h2>');
  response.write('<h2>Hello world - 3</h2>');
  response.write('<h2>Hello world - 4</h2>');
  response.write('<h2>Hello world - 5</h2>');
  response.end();
});

server.listen(3500);