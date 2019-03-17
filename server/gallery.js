import { existsSync, mkdirSync } from 'fs';
import conf from './conf';

export default { upload };

ensureUploadDir();

function upload(req, res) {
  const _keys = Object.keys(req.files),
    { type } = req.body;

  if (_keys.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const { imgFile } = req.files;
  const fileName = `${conf.UPLOAD_DIR}/${type}/${imgFile.name}`;

  // console.log(fileName);

  imgFile.mv(fileName, function(err) {
    if (err) return res.status(500).send(err);

    res.send('File uploaded!');
  });
}

function ensureUploadDir() {
  if (!existsSync(conf.UPLOAD_DIR)) {
    mkdirSync(conf.UPLOAD_DIR);
  }
}
