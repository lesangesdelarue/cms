import productsMock from './products.mock';

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
    productList: productsMock.resolver,
    productCreate,
  },
};

var fakeDatabase = {};

class Message {
  constructor(id, { content, author }) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

function productCreate(params) {
  const { product } = params;
  console.log(params);
  return product;
}

// function productUpdate({ id, input }) {
//   if (!fakeDatabase[id]) {
//     throw new Error('no message exists with id ' + id);
//   }
//   // This replaces all old data, but some apps might want partial update.
//   fakeDatabase[id] = input;
//   return new Message(id, input);
// }
