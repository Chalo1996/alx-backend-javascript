// full_server/utils.js

import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const fields = [];
    const students = [];

    for (const line of lines) {
      const student = line.split(',');
      const field = student[3];
      const firstName = student[0];

      if (!fields.includes(field)) {
        if (['CS', 'SWE'].includes(field)) {
          fields.push(field);
          students[field] = [firstName];
        }
      } else {
        students[field].push(firstName);
      }
    }

    const sortedFields = fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    const output = [];

    for (const field of sortedFields) {
      const sortedStudents = students[field].sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );
      const count = students[field].length;
      const names = sortedStudents.join(', ');
      output.push(`Number of students in ${field}: ${count}. List: ${names}`);
    }

    return `${output.join('\n')}\n`;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
