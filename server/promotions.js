export default {
  query: '', // TODO
  type: `
  type Promotion {
    promo_id:String
    info:String
    promo_products: [Product] 
    promo_shops:[Shop]
  }`,
  resolver() {
    return []; // TODO
  },
};
