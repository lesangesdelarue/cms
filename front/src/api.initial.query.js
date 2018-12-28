export default `{
  offers {
    items {
      id
      info
      offer_products
      offer_shops      
    }
    page {
      current
      length
    }
  }
  shops {
    id
    name
    address
  }
  productCategories {
    id
    val
  }
  productConditions {
    id
    val
  }
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
      gallery
      title
      shops
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
`;
