import offers from './offers.app';
import products from './products.app';

export default {
  connect,
  offerList() {
    return _gqlFetch(offers.queries.offerList);
  },
  productList() {
    return _gqlFetch(products.queries.productList);
  },
  productCreate(product) {
    const query = products.mutations.productCreate;

    const variables = {
      // input: {
      //   author: 'andy',
      //   content: 'hope is a good thing',
      // },
      product,
    };
    return _gqlPost({ query, variables });
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
  const content = await rawResponse.json();
  return content;
}

function _gqlFetch(query_) {
  return fetch('gql?query=' + query_)
    .then(res => res.json())
    .then(json => {
      return json.data;
    });
}

function _gqlPost({ query, variables }) {
  return fetch('/gql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}
