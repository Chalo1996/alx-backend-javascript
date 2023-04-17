const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let msg = 'This is the list of our students\n';
  try {
    const output = await countStudents(database);
    msg += output;
    res.status(200).send(msg);
  } catch (error) {
    console.log(`This is the list of our students
Cannot load the database`);
    res.status(500).end(`This is the list of our students
Cannot load the database`);
  }
});

app.listen(port);

module.exports = app;
