// Create web server
// Create a web server that listens to requests on port 3000. When someone accesses the root URL, the server should send back the text “Hello, World!”.
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello, World!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});