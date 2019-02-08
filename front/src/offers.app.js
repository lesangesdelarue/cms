import uuidv4 from './uuidv4';

export default {
  create,
  queries: {
    offerList: `{
  offerList {
    items {
      id
      created_at
      info
      offer_products {
        id
        batch
        condition
        created_at
        desc
        gallery
        title
        shop
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
  mutations: {
    offerCreate: `mutation OfferCreate($offer: OfferInput) {
      offerCreate(offer: $offer) {
        id
        created_at
        info
        offer_products
        offer_shop  
      }
    }`,
  },
};

function create() {
  return {
    id: uuidv4(),
    created_at: Math.floor(Date.now() / 1000),
    info: '',
    offer_products: [],
    offer_shop: 1,
  };
}
