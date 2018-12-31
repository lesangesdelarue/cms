// import buble from 'rollup-plugin-buble';

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
  // {
  //   input: 'front/index.js',
  //   plugins: [buble()],
  //   output: { file: 'server/tests/app.js', format: 'iife', interop: false },
  //   external: [],
  // },
  {
    input: 'dataGenerator/index.js',
    output: { file: 'dist/dataGenerator.js', format: 'cjs', interop: false },
    external: ['dotenv', 'fs'],
  },
];
