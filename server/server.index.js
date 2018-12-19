import express from 'express';
import helmet from 'helmet';

import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import conf from './server.conf';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
app.use(helmet());

app.use(
  '/gql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

const host = 'localhost';
const port = conf.API_GQL_PORT;

app.listen(port, host, () => {
  console.info(`listen ${port}`);
});
