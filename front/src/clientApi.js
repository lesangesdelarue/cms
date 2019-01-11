import offers from './offers';
import products from './products';

export default {
  connect,
  offers() {
    return _gqlFetch(offers.gql);
  },
  products: {
    productList() {
      return _gqlFetch(products.gql.items);
    },
    create: _gqlPost,
    // create(product_) {
    //   return _gqlPost({ query: products.gql.create, variables: product_ });
    // },
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
  return new Promise(resolve => {
    fetch('gql?query=' + query_)
      .then(res => res.json())
      .then(json => {
        resolve(json.data);
      });
  });
}

function _gqlPost() {
  var query = `mutation CreateProduct($input: MessageInput) {
  productCreate(input: $input) {
    id
  }
}`;

  fetch('/gql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        input: {
          author: 'andy',
          content: 'hope is a good thing',
        },
      },
    }),
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}
