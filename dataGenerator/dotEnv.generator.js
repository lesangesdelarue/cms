var fs = require('fs');

const _dotEnv = `USERS='lesanges:delarue'
SERVER_PORT=3001
SESSION_SECRET='tarteauxmyrtilles'
UPLOAD_DIR='dist/uploads'
PAGE_SIZE=5`;

fs.writeFileSync('.env', _dotEnv, function(err_) {
  if (err_) return console.log(err_);
});
