import express from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';

import auth from './server.auth';
import conf from './server.conf';
import img from './server.img';
import gql from './server.gql';

const app = express();
const host = 'localhost';
const port = conf.API_GQL_PORT;

img.ensureUploadDir();

// [!] static server
if (conf.NODE_ENV === 'tests') {
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
