import offers from './offers';
import products from './products';

export default {
  connect,
  offers() {
    return _gqlFetch(offers.gql);
  },
  products() {
    return _gqlFetch(products.gql);
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

function _gqlFetch(_encodedQuery) {
  return new Promise(resolve => {
    fetch('gql?query=' + _encodedQuery)
      .then(res => res.json())
      .then(json => {
        resolve(json.data);
      });
  });
}
