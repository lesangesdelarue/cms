const settings = {
  getProductCategory,
  getProductQuantity,
  getShops,
  getShop(mask_) {
    const t = getShops(mask_);
    console.log(mask_, t);
    return t[0];
  },
  shops: [],
  productCategories: [],
  productConditions: [],
};

export default settings;

/**
 * a bit mask is used to store shops
 * => very few shops, avoid an array structure
 */
function getShops(mask_) {
  const _shops = [];

  // 8 shops max
  [1, 2, 4, 8, 16, 32, 64, 128].forEach(id => {
    if (mask_ & id) {
      _shops.push(settings.shops.find(shop => shop.id === id));
    }
  });
  return _shops;
}

function getProductQuantity(qty_) {
  if (qty_.unit === '') return '';
  return '???'; // TODO
}

function getProductCategory(id_) {
  return settings.productCategories[id_].val;
}
