import productsMock from './products.mock';

export default {
  query: 'products(page:Int): Products',
  type: `

  type Products {
    items: [Product]
    page: Page
  }

  type Page {
    current: Int
    length: Int
  }

  type Product {
    id: String
    batch: Boolean
    created_at: Int
    gallery: [String]
    title: String
    shops: Int
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
  resolver: productsMock.resolver,
};
