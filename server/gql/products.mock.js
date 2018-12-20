/**
 * MOCK products resolver
 * => [!] all items are kept in RAM
 */

import { readFileSync } from 'fs';

const _productsMock = JSON.parse(readFileSync('server/tests/products.json'));

export default {
  resolver() {
    return _productsMock;
  },
};
