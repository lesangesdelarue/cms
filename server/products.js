export default {
  query: '', // TODO
  type: `
  type Product {
    prod_id: String
    created_at: Date
    gallery: [String]
    title: String
    shops: [Int]
    tags: [String]
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
