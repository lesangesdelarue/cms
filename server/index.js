import express from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';

import auth from './auth';
import conf from './conf';
import img from './gallery';
import gql from './gql';

import shops from './shops';

const app = express();
const host = 'localhost';
const port = conf.API_GQL_PORT;

start();

async function start() {
  img.ensureUploadDir();
  await shops.init();

  // [!] static server
  if (conf.NODE_ENV === 'dev') {
    app.use(express.static('server/tests'));
  }

  app.use(helmet());
  app.use(fileUpload());

  app.post('/auth', auth.request);
  app.post('/upload', img.upload);
  app.use('/gql', gql);

  app.listen(port, host, () => {
    console.info(`listen ${port}`);
  });
}
