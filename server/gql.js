import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import products from './gql/products';
import offers from './gql/offers';

const schema = buildSchema(`
  type Query {
    ${products.query}
    ${offers.query}
  }

  type Page {
    current: Int
    length: Int
  }

  ${products.type}
  ${offers.type}
`);

export default graphqlHTTP({
  schema,
  rootValue: {
    products: products.resolver,
    offers: offers.resolver,
  },
  graphiql: conf.NODE_ENV === 'dev',
});
