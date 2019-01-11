import offers from './offers';
import products from './products';

export default {
  connect,
  offers() {
    return _gqlFetch(offers.gql);
  },
  products: {
    items() {
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
  var author = 'andy';
  var content = 'hope is a good thing';
  var query = `mutation CreateProduct($input: MessageInput) {
  createProduct(input: $input) {
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
          author,
          content,
        },
      },
    }),
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}

// function _gqlPost({ query, variables }) {
//   return new Promise(resolve => {
//     fetch('gql', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({
//         query,
//         variables,
//       }),
//     })
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         resolve(json);
//       });
//   });
// }
