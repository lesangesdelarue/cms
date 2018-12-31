const settings = {
  getProductCategory,
  getShops,
  shops: [],
  productCategories: [],
  productConditions: [],
};

export default settings;

function getShops(mask_) {
  const _ids = [];

  if (mask_ & 1) {
    _ids.push(1);
  }

  if (mask_ & 2) {
    _ids.push(2);
  }

  return _ids.map(id_ => settings.shops.find(shop => shop.id === id_));
}

function getProductCategory(id_) {
  return settings.productCategories[id_].val;
}
