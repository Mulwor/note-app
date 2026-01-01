const http = require("http");
 
const server =  http.createServer(function(request, response){
  console.log('Server work')
  response.end("Hello world on server");
});

server.listen(3500);