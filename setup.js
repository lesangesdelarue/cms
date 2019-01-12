import fs from 'fs';
import conf from './server/conf';

if (!fs.existsSync(conf.UPLOAD_DIR)) {
  fs.mkdirSync(conf.UPLOAD_DIR);
}

const _dotEnv = `
USERS='lesanges:delarue'
SERVER_PORT=3001
SESSION_SECRET='tarteauxmyrtilles'
PAGE_SIZE=5`;

fs.writeFileSync('.env', _dotEnv, function(err_) {
  if (err_) return console.log(err_);
});
