export default {
  queries: {
    offerList: `{
  offerList {
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
  },
};
