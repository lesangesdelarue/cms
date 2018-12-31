import fs from 'fs';

import conf from '../server/conf';
import imageGenerator from './imageGenerator';
import _mock from './products.mock';

const dir = 'front/public/img';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  generateImgs();
} else {
  console.log(`${dir} exists, skipping images generation`);
}

async function generateImgs() {
  for (let i = 0; i < _mock.items.length; i += 1) {
    const o = _mock.items[i];
    for (let j = 0; j < o.gallery.length; j += 1) {
      await imageGenerator({
        batch: o.batch,
        category: conf.productCategories[o.category].val,
        condition: conf.productConditions[o.condition].val,
        dir: 'front/public/img',
        id: o.id,
        number: j,
        title: o.title,
      });
    }
  }
}
