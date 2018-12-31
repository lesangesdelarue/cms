export default [
  {
    input: 'server/index.js',
    output: { file: 'dist/server.dev.js', format: 'cjs', interop: false },
    external: [
      'body-parser',
      'cors',
      'dotenv',
      'express',
      'express-session',
      'express-fileupload',
      'express-graphql',
      'fs',
      'graphql',
      'helmet',
      'memorystore',
    ],
  },
  {
    input: 'dataGenerator/index.js',
    output: { file: 'dist/dataGenerator.js', format: 'cjs', interop: false },
    external: ['dotenv', 'fs'],
  },
];
