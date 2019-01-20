import conf from '../conf';
import model from '../model';

export default {
  resolver(params) {
    const { offers } = model.data;
    const page = params.page || 0;
    const pageSize = conf.PAGE_SIZE;

    const totalSize = offers.length;
    const nbPages = Math.ceil(totalSize / pageSize);

    const items = [];
    const start = page * pageSize;
    let end = start + pageSize;
    if (end >= totalSize) {
      end = totalSize;
    }

    for (let i = start; i < end; i += 1) {
      items.push(offers[i]);
    }

    return { items, page: { current: page, length: nbPages } };
  },
};
