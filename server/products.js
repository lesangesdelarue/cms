export default {
  query: '', // TODO
  type: `
  type Product {
    id: String
    batch: Boolean
    created_at: Date
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
  resolver() {
    return []; // TODO
  },
};
