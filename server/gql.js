import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import shops from './shops';

const schema = buildSchema(`
  type Query {
    shops: [Shop]
  }
  type Product {
    prod_id:String
    prod_condition:String
    info:String
    price_full:Float
    price_discounted:Float
  }
  type Shop {
    shop_id:String
    address:String
    info:String
  }
  type Promotion {
    promo_id:String
    info:String
    promo_products: [Product] 
    promo_shops:[Shop]
  }
`);

export default graphqlHTTP({
  schema,
  rootValue: {
    shops: () => shops.items,
  },
  graphiql: conf.NODE_ENV === 'dev',
});
