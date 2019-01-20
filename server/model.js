import { readFileSync, writeFileSync } from 'fs';

const model = {
  data: {
    offers: [],
    products: [],
  },
  load,
  save,
};

load();

export default model;

function load() {
  const { data } = model;
  const jsonDb = JSON.parse(readFileSync('data.json'));
  data.offers = jsonDb.offers;
  data.products = jsonDb.products;
}

function save() {
  const { data } = model;
  const jsonDb = JSON.stringify(data, undefined, 1);

  writeFileSync('data.json', jsonDb, function(err_) {
    if (err_) return console.log(err_);
  });
}
