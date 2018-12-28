import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import products from './gql/products';
import productCategories from './gql/product.categories';
import productConditions from './gql/product.conditions';
import offers from './gql/offers';
import shops from './gql/shops';

const schema = buildSchema(`
  type Query {
    ${products.query}
    ${productCategories.query}
    ${productConditions.query}
    ${offers.query}
    ${shops.query}
  }

  type Page {
    current: Int
    length: Int
  }

  ${products.type}
  ${productCategories.type}
  ${productConditions.type}
  ${offers.type}
  ${shops.type}
`);

export default graphqlHTTP({
  schema,
  rootValue: {
    products: products.resolver,
    productCategories: productCategories.resolver,
    productConditions: productConditions.resolver,
    offers: offers.resolver,
    shops: shops.resolver,
  },
  graphiql: conf.NODE_ENV === 'dev',
});
