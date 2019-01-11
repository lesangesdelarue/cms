import productsMock from './products.mock';

export default {
  productQuery: 'products(page:Int): Products',
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
  `,
  products: productsMock.resolver,
  createProduct,
  updateProduct,
};

var fakeDatabase = {};

class Message {
  constructor(id, { content, author }) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

function createProduct({ input }) {
  console.log('**' + JSON.stringify(input, undefined, 1) + '**');
  var id = require('crypto')
    .randomBytes(10)
    .toString('hex');

  fakeDatabase[id] = input;
  return new Message(id, input);
}

function updateProduct({ id, input }) {
  if (!fakeDatabase[id]) {
    throw new Error('no message exists with id ' + id);
  }
  // This replaces all old data, but some apps might want partial update.
  fakeDatabase[id] = input;
  return new Message(id, input);
}
