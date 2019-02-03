import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import productsGql from './gql/products.gql';
import offersGql from './gql/offers.gql';

const schema = buildSchema(`

  type Mutation {
    ${productsGql.mutation}
    ${offersGql.mutation}
  }

  type Query {
    ${productsGql.query}
    ${offersGql.query}
  }

  type Page {
    current: Int
    length: Int
  }

  ${productsGql.type}
  ${offersGql.type}
`);

const { productList, productCreate, productUpdate } = productsGql.resolvers;
const { offerCreate, offerList } = offersGql.resolvers;

export default graphqlHTTP({
  schema,
  rootValue: {
    // queries
    productList,
    offerList,

    // mutations
    productCreate,
    productUpdate,

    offerCreate,
  },
  graphiql: conf.NODE_ENV === 'dev',
});
