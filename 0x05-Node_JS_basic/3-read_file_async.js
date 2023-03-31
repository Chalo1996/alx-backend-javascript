const fs = require('fs');
const { promisify } = require('util');

module.exports = function countStudents(path) {
  const asyncData = promisify(fs.readFile);

  try {
    return asyncData(path, 'utf8').then((data) => {
      const linechuck = data.split('\n');
      const lines = linechuck.filter((line) => line.trim() !== '');
      const students = lines.length - 1;
      console.log(`Number of students: ${students}`);
      const fields = ['CS', 'SWE'];
      for (const field of fields) {
        const studentsInField = lines.filter((line) => line.includes(field));
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((student) => student.split(',')[0]).join(', ')}`);
      }
    }).catch((err) => {
      throw new Error(err);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
