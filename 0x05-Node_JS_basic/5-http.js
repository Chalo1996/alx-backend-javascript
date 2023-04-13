const server = require('http');
const countStudents = require('./3-read_file_async');

const app = server.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245);

module.exports = app;
