import fs from 'fs';

const shops = {
  items: [],
};

try {
  const rawShops = fs.readFileSync('shops.json');
  shops.items = JSON.parse(rawShops);
} catch (err) {
  console.error('loading shops.json');
}

export default shops;
