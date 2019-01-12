export default [
  {
    input: 'setup.js',
    output: { file: 'dist/setup.js', format: 'cjs', interop: false },
    external: ['dotenv', 'fs'],
  },
];
