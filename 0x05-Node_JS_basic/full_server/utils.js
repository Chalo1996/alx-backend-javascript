// full_server/utils.js

import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        data.trim().split('\n').forEach((line) => {
          const [firstName, lastName, email, major, ...courses] = line.split(',');
          if (major in students) {
            students[major].push(firstName);
          } else {
            students[major] = [firstName];
          }
        });
        resolve(students);
      }
    });
  });
}
