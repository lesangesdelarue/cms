export default {
  gql: `{
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
}
`,
};
