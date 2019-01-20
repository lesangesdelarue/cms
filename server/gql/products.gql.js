import conf from '../conf';
import model from '../model';

export default {
  query: 'productList(page:Int): Products',
  mutation: `
    productCreate(product: ProductInput): Product
    productUpdate(id: ID!, input: MessageInput): Message
  `,
  type: `
  type Products {
    items: [Product]
    page: Page
  }

  type Product {
    id: String
    batch: Boolean
    created_at: Int
    desc: String
    gallery: [String]
    title: String
    shop: Int
    category: Int
    quantity: Quantity
    condition: Int
    price: Price
  }

  type Quantity {
    val: Float
    unit: String
  }

  type Price {
    initial: Float
    selling: Float
  }

  input MessageInput {
    content: String
    author: String
  }

  input ProductInput {
    id: String
    batch: Boolean
    created_at: Int
    desc: String
    gallery: [String]
    title: String
    shop: Int
    category: Int
    quantity: QuantityInput
    condition: Int
    price: PriceInput
  }

  input QuantityInput {
    val: Float
    unit: String
  }

  input PriceInput {
    initial: Float
    selling: Float
  }

  type Message {
    id: ID!
    content: String
    author: String
  }
  `,
  resolvers: {
    productList,
    productCreate,
  },
};

function productCreate(params) {
  const { products } = model.data;
  const { product } = params;
  console.log(params);
  products.unshift(product);
  model.save();
  return product;
}

function productList(params) {
  const page = params.page || 0;
  const pageSize = conf.PAGE_SIZE;
  const { products } = model.data;

  const totalSize = products.length;
  const nbPages = Math.ceil(totalSize / pageSize);

  const items = [];
  const start = page * pageSize;
  let end = start + pageSize;
  if (end >= totalSize) {
    end = totalSize;
  }

  for (let i = start; i < end; i += 1) {
    items.push(products[i]);
  }

  return { items, page: { current: page, length: nbPages } };
}

// function productUpdate({ id, input }) {
//   if (!fakeDatabase[id]) {
//     throw new Error('no message exists with id ' + id);
//   }
//   // This replaces all old data, but some apps might want partial update.
//   fakeDatabase[id] = input;
//   return new Message(id, input);
// }
