// full_server/controllers/StudentsController.js

import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.app.locals.database);
      res.status(200).send(`This is the list of our students\n${data}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const data = await readDatabase(req.app.locals.database);
        const lines = data.trim().split('\n');
        const regex = new RegExp(`^Number of students in ${major}:`);
        const filteredLines = lines.filter((line) => regex.test(line));
        if (filteredLines.length === 0) {
          res.status(500).send(`No student found for ${major}`);
        } else {
          const output = filteredLines.map((line) => {
            const startIndex = line.indexOf(':') + 2;
            const names = line.substring(startIndex).split(', ').join(', ');
            return `List: ${names}`;
          });
          res.status(200).send(`List: ${output.join('\nList: ')}\n`);
        }
      } catch (err) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default StudentsController;
