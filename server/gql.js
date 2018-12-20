import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import products from './gql/products';
import productCategories from './gql/product.categories';
import productConditions from './gql/product.conditions';
import promotions from './gql/promotions';
import shops from './gql/shops';

const schema = buildSchema(`
  type Query {
    ${products.query}
    ${productCategories.query}
    ${productConditions.query}
    ${promotions.query}
    ${shops.query}
  }
  ${products.type}
  ${productCategories.type}
  ${productConditions.type}
  ${promotions.type}
  ${shops.type}
`);

export default graphqlHTTP({
  schema,
  rootValue: {
    products: products.resolver,
    productCategories: productCategories.resolver,
    productConditions: productConditions.resolver,
    promotions: promotions.resolver,
    shops: shops.resolver,
  },
  graphiql: conf.NODE_ENV === 'dev',
});
