/**
 * MOCK products resolver
 * => [!] all items are kept in RAM
 */

import { readFileSync } from 'fs';

import conf from '../conf';

const _productsMock = JSON.parse(
  readFileSync('server/tests/products.json'),
).sort((a, b) => b.created_at - a.created_at); // last created first

export default {
  resolver(params) {
    const page = params.page || 0;
    const pageSize = conf.PAGE_SIZE;

    const totalSize = _productsMock.length;
    const nbPages = Math.ceil(totalSize / pageSize);

    const items = [];
    const start = page * pageSize;
    let end = start + pageSize;
    if (end >= totalSize) {
      end = totalSize;
    }

    for (let i = start; i < end; i += 1) {
      items.push(_productsMock[i]);
    }

    return { items, page: { current: page, length: nbPages } };
  },
};
