import conf from './conf';

export default {
  query: 'productConditions: [ProductCondition]',
  type: `type ProductCondition {
    id:Int
    val:String
  }`,
  resolver() {
    return conf.productConditions;
  },
};
