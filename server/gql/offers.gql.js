import model from '../model';
import offersMock from './offers.mock';

export default {
  query: 'offerList(page:Int): Offers',
  mutation: `
  offerCreate(offer: OfferInput): Offer
  offerDelete(offerIdList: [String]): [String]
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
    offer_products: [Product] 
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
    offerDelete,
  },
};

function offerCreate(params) {
  const { offers } = model.data;
  const { offer } = params;
  offers.unshift(offer);
  model.save();
  return offer;
}

function offerDelete(params) {
  const { offerIdList } = params,
    filteredOffersId = model.data.offers.filter(offer => {
      return offerIdList.includes(offer.id) === false;
    });

  model.data.offers = filteredOffersId;
  model.save();

  return offerIdList;
}
