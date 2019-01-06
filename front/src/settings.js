const settings = {
  getProductCategory,
  getProductQuantity,
  getShop,
  productCategories: [],
  productConditions: [],
  shops: [],
};

export default settings;

function getShop(id_) {
  return settings.shops.find(shop => shop.id === id_);
}

function getProductQuantity(qty_) {
  if (qty_.unit === '') return '';
  return '???'; // TODO
}

function getProductCategory(id_) {
  return settings.productCategories[id_].val;
}
