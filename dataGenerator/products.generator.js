import conf from '../server/conf';
import _mock from './products.mock';

const products = _mock.items.map(o => {
  const _nbImages = rnd(2) + 1;
  const _price = rnd(30);

  return Object.assign({}, o, {
    batch: !!rnd(),
    category: rnd(conf.productCategories.length),
    condition: rnd(conf.productConditions.length),
    gallery: (function() {
      const t = [];
      for (let i = 0; i < _nbImages; i += 1) {
        t.push(`${o.id}_${i}`);
      }
      return t;
    })(),
    shop: rnd(2),
    price: {
      initial: _price,
      selling: _price * 0.5,
    },
    quantity: {
      val: rnd(6),
      unit: '',
    },
  });
});

console.log(JSON.stringify(products, undefined, 2));

function rnd(maxValue = 2) {
  return Math.floor(Math.random() * maxValue);
}

// await imageGenerator({
//   batch: o.batch,
//   category: 'Entretien, nettoyage',
//   dir: 'server/tests/img/',
//   id: o.id,
//   number: i,
//   title: o.title,
// });
