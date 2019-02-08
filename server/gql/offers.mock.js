import conf from '../conf';
import model from '../model';

export default {
  resolver(params) {
    const { offers, products } = model.data;
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
      // [!] prevent model alteration
      const offer = JSON.parse(JSON.stringify(offers[i]));

      items.push(offer);
      const productsId = offer.offer_products;
      const offer_products = [];

      for (let j = 0; j < products.length; j += 1) {
        if (productsId.includes(products[j].id) === true) {
          offer_products.push(products[j]);
        }
      }
      offer.offer_products = offer_products;
    }

    const data = { items, page: { current: page, length: nbPages } };

    return data;
  },
};
