const settings = {
  getProductCategory,
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

function getProductCategory(id_) {
  return settings.productCategories[id_].val;
}
