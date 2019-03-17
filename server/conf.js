import { readFileSync } from 'fs';

import dotenv from 'dotenv';

const conf = {
  UPLOAD_DIR: 'front/build/img',
};

Object.assign(conf, dotenv.config().parsed);

try {
  const _raw = readFileSync('conf.json');
  const _confJson = JSON.parse(_raw);
  Object.assign(conf, _confJson);

  // post process
  conf.PAGE_SIZE = parseInt(conf.PAGE_SIZE, 10);
} catch (err) {
  console.error('missing file conf.json');
}

export default conf;
