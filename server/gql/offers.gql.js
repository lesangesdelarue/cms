import model from '../model';
import offersMock from './offers.mock';

export default {
  query: 'offerList(page:Int): Offers',
  mutation: `
  offerCreate(offer: OfferInput): Offer
`,
  type: `
  type Offers {
    items: [Offer]
    page: Page
  }
  type Offer {
    id:String
    created_at: Int
    info:String
    offer_products: [String] 
    offer_shop: Int
  }
  
  input OfferInput {
    id: String
    created_at: Int
    info:String
    offer_products: [String] 
    offer_shop: Int
  }
  `,

  resolvers: {
    offerList: offersMock.resolver,
    offerCreate,
  },
};

function offerCreate(params) {
  const { offers } = model.data;
  const { offer } = params;
  console.log(params);
  offers.unshift(offer);
  // model.save();
  return offer;
}
