import uuidv4 from './uuidv4';

export default {
  create,
  gql: `{
    products {
      page {
        current
        length
      }
      items {
        id
        batch
        condition
        created_at
        desc
        gallery
        title
        shop
        category
        condition
        price {
          initial
          selling
        }
        quantity {
          val
          unit
        }
      }
    }
  }
  `,
  imgFilename(prod) {
    return prod.id + '_0.jpg';
  },
  imgUrl(prod) {
    return `img/${prod.id}_0.jpg?${Date.now()}`; // to invalidate browser cache
  },
};

function create() {
  return {
    id: uuidv4(),
    batch: false,
    condition: 0,
    created_at: Math.floor(Date.now() / 1000),
    desc: '',
    gallery: [],
    title: '',
    shop: 1,
    category: 0,
    price: { initial: 0, selling: 0 },
    quantity: { val: 1, unit: '' },
  };
}
