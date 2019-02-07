import uuidv4 from './uuidv4';

export default {
  create,
  queries: {
    productList: `{
    productList {
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
  },
  mutations: {
    productCreate: `mutation ProductCreate($product: ProductInput) {
      productCreate(product: $product) {
        id
        batch
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
    }`,
  },
  imgFilename(prod) {
    const name = prod.id + '_0.jpg';
    return name;
  },
  imgUrl(prod) {
    return `img/prod/${prod.id}_0.jpg?${Date.now()}`; // to invalidate browser cache
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
