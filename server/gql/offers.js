import offersMock from './offers.mock';

export default {
  query: 'offers(page:Int): Offers',
  type: `
  type Offers {
    items: [Offers]
    page: Page
  }
  type Offer {
    id:String
    info:String
    offer_products: [String] 
    offer_shops: Int
  }`,
  resolver() {
    return offersMock.resolver;
  },
};
