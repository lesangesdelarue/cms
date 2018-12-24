import query from './query';

console.log(query);

const _encodedQuery = encodeURIComponent(query);

export default {
  fetch() {
    return new Promise(resolve => {
      fetch('gql?query=' + _encodedQuery)
        .then(res => res.json())
        .then(json => {
          resolve(json.data);
        });
    });
  },
};
