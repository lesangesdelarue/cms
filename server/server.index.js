import express from 'express';
import helmet from 'helmet';

import conf from './server.conf';
import gql from './server.gql';

const app = express();
const host = 'localhost';
const port = conf.API_GQL_PORT;

app.use(helmet());
app.use('/gql', gql);

app.listen(port, host, () => {
  console.info(`listen ${port}`);
});
