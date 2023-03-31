const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const linechuck = data.split('\n');

    const lines = linechuck.filter((line) => line.trim() !== '');

    const students = lines.length - 1;

    console.log(`Number of students: ${students}`);

    const fields = ['CS', 'SWE'];

    for (const field of fields) {
      const studentsInField = lines.filter((line) => line.includes(field));

      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((student) => student.split(',')[0]).join(', ')}`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
