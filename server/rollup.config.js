export default [
  {
    input: 'server/index.js',
    output: { file: 'dist/server.dev.js', format: 'cjs', interop: false },
    external: [
      'dotenv',
      'express',
      'express-fileupload',
      'express-graphql',
      'fs',
      'graphql',
      'helmet',
    ],
  },
  {
    input: 'dataGenerator/index.js',
    output: { file: 'dist/dataGenerator.js', format: 'cjs', interop: false },
    external: ['dotenv', 'fs'],
  },
];
