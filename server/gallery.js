import { existsSync, mkdirSync } from 'fs';
import conf from './conf';

export default { upload };

ensureUploadDir();

function upload(req, res) {
  const _keys = Object.keys(req.files);
  if (_keys.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const { imgFile } = req.files;

  imgFile.mv(`${conf.UPLOAD_DIR}/${imgFile.name}`, function(err) {
    if (err) return res.status(500).send(err);

    res.send('File uploaded!');
  });
}

function ensureUploadDir() {
  if (!existsSync(conf.UPLOAD_DIR)) {
    mkdirSync(conf.UPLOAD_DIR);
  }
}
