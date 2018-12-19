export default {
  input: 'server/server.index.js',
  output: { file: 'dist/server.dev.js', format: 'cjs', interop: false },
  external: ['dotenv', 'express', 'express-graphql', 'graphql', 'helmet'],
};
