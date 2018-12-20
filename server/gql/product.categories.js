import conf from '../conf';

export default {
  query: 'productCategories: [ProductCategory]',
  type: `type ProductCategory {
    id:Int
    val:String
  }`,
  resolver() {
    return conf.productCategories;
  },
};
