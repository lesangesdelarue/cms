/**
 * MOCK offers resolver
 * => [!] all items are kept in RAM
 */

// import { readFileSync } from 'fs';

import conf from '../conf';

const _offersMock = [];

// const _offersMock = JSON.parse(
//   readFileSync('server/tests/offers.json'),
// ).sort((a, b) => b.created_at - a.created_at); // last created first

export default {
  resolver(params) {
    const page = params.page || 0;
    const pageSize = conf.PAGE_SIZE;

    const totalSize = _offersMock.length;
    const nbPages = Math.ceil(totalSize / pageSize);

    const items = [];
    const start = page * pageSize;
    let end = start + pageSize;
    if (end >= totalSize) {
      end = totalSize;
    }

    for (let i = start; i < end; i += 1) {
      items.push(_offersMock[i]);
    }

    return { items, page: { current: page, length: nbPages } };
  },
};
