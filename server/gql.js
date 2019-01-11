import conf from './conf';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import gqlProducts from './gql/products';
import offers from './gql/offers';

const schema = buildSchema(`

  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Mutation {
    productCreate(input: MessageInput): Message
    productUpdate(id: ID!, input: MessageInput): Message
  }



  type Query {
    ${gqlProducts.productQuery}
    ${offers.query}
  }

  type Page {
    current: Int
    length: Int
  }

  ${gqlProducts.type}
  ${offers.type}
`);

export default graphqlHTTP({
  schema,
  rootValue: {
    // queries
    products: gqlProducts.productList,
    offers: offers.resolver,

    // mutations
    productCreate: gqlProducts.productCreate,
    productUpdate: gqlProducts.productUpdate,
  },
  graphiql: conf.NODE_ENV === 'dev',
});

// ----------------------------------------------------------------------------
