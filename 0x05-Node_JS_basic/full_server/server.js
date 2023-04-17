import express from 'express';
import AppController from './controllers/AppController';
import StudentsController from './controllers/StudentsController';

const app = express();
const port = 1245;
const database = process.argv[2];

// Routes
app.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

app.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res, database);
});

app.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, database);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
