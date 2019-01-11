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
    createProduct(input: MessageInput): Message
    updateProduct(id: ID!, input: MessageInput): Message
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
    products: gqlProducts.products,
    offers: offers.resolver,

    // mutations
    createProduct: gqlProducts.createProduct,
    updateProduct: gqlProducts.updateProduct,
  },
  graphiql: conf.NODE_ENV === 'dev',
});

// ----------------------------------------------------------------------------
