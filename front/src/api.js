import initial from './api.initial.query';

const queries = {
  initial: _api_queryPack(initial),
};

const QUERY_PREFIX = 'http://localhost:3001/gql?query=';

export default {
  initial() {
    return _api_fetch(queries.initial);
  },
};

function _api_fetch(_encodedQuery) {
  return new Promise(resolve => {
    fetch(QUERY_PREFIX + _encodedQuery)
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
