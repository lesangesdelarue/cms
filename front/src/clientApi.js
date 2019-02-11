import offers from './offers.app';
import products from './products.app';

export default {
  connect,
  async offerList() {
    const res = await _gqlFetch(offers.queries.offerList);
    return res;
  },
  async productList() {
    const res = await _gqlFetch(products.queries.productList);
    return res;
  },
  async productCreate(product) {
    return _gqlPost({
      query: products.mutations.productCreate,
      variables: {
        product,
      },
    });
  },
  async offerCreate(offer) {
    return _gqlPost({
      query: offers.mutations.offerCreate,
      variables: {
        offer,
      },
    });
  },
  async offerDelete(offerIdList) {
    return _gqlPost({
      query: offers.mutations.offerDelete,
      variables: {
        offerIdList,
      },
    });
  },
};

async function connect(params) {
  const rawResponse = await fetch('connect', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const json = await rawResponse.json();
  return json;
}

async function _gqlFetch(query_) {
  const rawResponse = await fetch('gql?query=' + query_);
  const json = await rawResponse.json();
  return json.data;
}

async function _gqlPost({ query, variables }) {
  const rawResponse = await fetch('/gql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await rawResponse.json();
  return json.data;
}
