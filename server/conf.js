import { readFileSync } from 'fs';

import dotenv from 'dotenv';

const conf = dotenv.config().parsed;
try {
  const _raw = readFileSync('conf.json');
  const _confJson = JSON.parse(_raw);
  Object.assign(conf, _confJson);
} catch (err) {
  console.error('missing file conf.json');
}

export default conf;
