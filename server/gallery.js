import fs from 'fs';
import conf from './conf';

export default { upload };

ensureUploadDir();

function upload(req, res) {
  const _keys = Object.keys(req.files);
  if (_keys.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const sampleFile = req.files.sampleFile;

  sampleFile.mv(`${conf.UPLOAD_DIR}/filename.jpg`, function(err) {
    if (err) return res.status(500).send(err);

    res.send('File uploaded!');
  });
}

function ensureUploadDir() {
  conf.UPLOAD_DIR = conf.UPLOAD_DIR || 'dist/uploads';

  if (!fs.existsSync(conf.UPLOAD_DIR)) {
    fs.mkdirSync(conf.UPLOAD_DIR);
  }
}
