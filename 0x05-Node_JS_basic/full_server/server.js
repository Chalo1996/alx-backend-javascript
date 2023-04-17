// full_server/server.js

import express from 'express';
import router from './routes/index.js';

const app = express();
app.locals.dbFilePath = process.argv[2];

app.use('/', router);

const port = 1245;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
export default app;
