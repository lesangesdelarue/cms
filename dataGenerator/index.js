import conf from '../server/conf';
import _mock from './products.mock';

const products = _mock.items.map(o => {
  const _price = rnd(30);
  return Object.assign({}, o, {
    batch: !!rnd(),
    category: rnd(conf.productCategories.length),
    condition: 0,
    gallery: ['default'],
    shops: rnd(4),
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

function rnd(maxValue = 2) {
  return Math.floor(Math.random() * maxValue);
}

products.forEach(function(o) {
  console.log(o);
});
