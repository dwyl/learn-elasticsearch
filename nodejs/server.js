var http = require('http');

http.createServer(function (request, response) {
  console.log('Server accessed by:'+request.connection.remoteAddress)
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(port = 3000);

console.log('Server running at http://127.0.0.1:'+port);
