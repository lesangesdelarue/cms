import express from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';

import auth from './auth';
import conf from './conf';
import gallery from './gallery';
import gql from './gql';

const app = express();
const host = 'localhost';
const port = conf.API_GQL_PORT;

// [!] static server
if (conf.NODE_ENV === 'dev') {
  app.use(express.static('server/tests'));
}

app.use(helmet());
app.use(fileUpload());

app.post('/auth', auth.request);
app.post('/upload', gallery.upload);
app.use('/gql', gql);

app.listen(port, host, () => {
  console.info(`listen ${port}`);
});
