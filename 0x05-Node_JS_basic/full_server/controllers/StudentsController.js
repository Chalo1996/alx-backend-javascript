// full_server/controllers/StudentsController.js

import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.app.locals.dbFilePath);
      const fields = Object.keys(students)
        .sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );
      let response = 'This is the list of our students\n';
      fields.forEach((field) => {
        if (['SWE', 'CS'].includes(field)) {
          const numStudents = students[field].length;
          const studentList = students[field].join(', ');
          response += `Number of students in ${field}: ${numStudents}. List: ${studentList}\n`;
        }
      });
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(req.app.locals.dbFilePath);
      const studentList = students[major].join(', ');
      const response = `List: ${studentList}`;
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
