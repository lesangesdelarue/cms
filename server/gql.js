import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import products from './products';
import promotions from './promotions';
import shops from './shops';

const schema = buildSchema(`
  type Query {
    ${products.query}
    ${promotions.query}
    ${shops.query}
  }
  scalar Date
  ${products.type}
  ${promotions.type}
  ${shops.type}
`);

export default graphqlHTTP({
  schema,
  rootValue: {
    products: products.resolver,
    promotions: promotions.resolver,
    shops: shops.resolver,
  },
  graphiql: conf.NODE_ENV === 'dev',
});
