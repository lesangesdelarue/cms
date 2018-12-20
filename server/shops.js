import fs from 'fs';

var _shopItems;

// load shops.json configuration file
try {
  const rawShops = fs.readFileSync('shops.json');
  _shopItems = JSON.parse(rawShops);
} catch (err) {
  console.error('loading shops.json');
}

export default {
  query: 'shops: [Shop]',
  type: `
  type Shop {
    shop_id:Int
    name:String
    address:String    
  }`,
  resolver() {
    return _shopItems;
  },
};
