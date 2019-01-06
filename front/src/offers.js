export default {
  gql: `{
  offers {
    items {
      id
      info
      offer_products
      offer_shop      
    }
    page {
      current
      length
    }
  }
}
`,
};
