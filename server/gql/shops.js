import conf from '../conf';

export default {
  query: 'shops: [Shop]',
  type: `
  type Shop {
    id:Int
    name:String
    address:String    
  }`,
  resolver() {
    return conf.shops;
  },
};
