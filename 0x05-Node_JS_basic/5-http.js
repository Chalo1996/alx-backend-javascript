const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const database = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let msg = 'This is the list of our students\n';
    try {
      const output = await countStudents(database);
      msg += output;
      res.end(msg);
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end(`${msg} ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port);

module.exports = app;
