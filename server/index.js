import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import memorystore from 'memorystore';

const MemoryStore = memorystore(session);

// import cors from 'cors';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';

import auth from './auth';
import conf from './conf';
import gallery from './gallery';
import gql from './gql';

const app = express();
const host = 'localhost';
const port = conf.SERVER_PORT;
const day_ms = 86400000;

if (port === undefined) {
  console.error('Missing .env SERVER_PORT');
}

app.use(
  session({
    cookie: {
      maxAge: day_ms,
      name: 'ladrcms',
      secure: conf.NODE_ENV === 'production',
    },
    resave: false,
    saveUninitialized: false,
    secret: conf.SESSION_SECRET,
    store: new MemoryStore({
      checkPeriod: day_ms,
    }),
  }),
);

app.use(helmet());
app.use(bodyParser.json());
app.use(fileUpload());

app.post('/connect', auth.connect);
app.post('/upload', auth.verify, gallery.upload);
app.use('/gql', auth.verify, gql);

app.listen(port, host, () => {
  console.info(`server listen on ${port}`);
});
