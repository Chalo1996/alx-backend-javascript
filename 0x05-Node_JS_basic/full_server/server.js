// full_server/server.js

import express from 'express';
import router from './routes/index';

const app = express();
/* eslint-disable prefer-destructuring */
app.locals.dbFilePath = process.argv[2];

app.use('/', router);

const port = 1245;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
export default app;
