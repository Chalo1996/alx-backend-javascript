const app = require('http');

module.exports = app.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
}).listen(1245);
