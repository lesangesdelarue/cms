import offers from './gql.offers';
import products from './gql.products';

const queries = {
  offers: _api_queryPack(offers),
  products: _api_queryPack(products),
};

export default {
  connect,
  offers() {
    return _gqlFetch(queries.offers);
  },
  products() {
    return _gqlFetch(queries.products);
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

function _api_queryPack(query_) {
  return query_
    .replace(/\n/g, ' ')
    .replace(/ +(?= )/g, '')
    .replace(/ \{|\{ /g, '{')
    .replace(/ \{|\{ /g, '{')
    .replace(/ \}|\} /g, '}')
    .replace(/ \}|\} /g, '}');
}
