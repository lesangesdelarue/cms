const settings = {
  getProductCategory,
  getProductQuantity,
  getShops,
  shops: [],
  productCategories: [],
  productConditions: [],
};

export default settings;

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
