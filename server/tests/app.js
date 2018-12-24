(function () {
  'use strict';

  var _query = "{\n  shops {\n    id\n    name\n    address\n  }\n  productCategories {\n    id\n    val\n  }\n  productConditions {\n    id\n    val\n  }\n  products {\n    id\n    batch\n    condition\n    created_at\n    gallery\n    title\n    shops\n    category\n    condition\n    price {\n      initial\n      selling\n    }\n    quantity {\n      val\n      unit\n    }\n  }\n}";

  var query = queryPack(_query);

  function queryPack(query_) {
    return query_
      .replace(/\n/g, ' ')
      .replace(/ +(?= )/g, '')
      .replace(/ \{|\{ /g, '{')
      .replace(/ \{|\{ /g, '{')
      .replace(/ \}|\} /g, '}')
      .replace(/ \}|\} /g, '}');
  }

  console.log(query);

  var _encodedQuery = encodeURIComponent(query);

  var api = {
    fetch: function fetch$1() {
      return new Promise(function (resolve) {
        fetch('gql?query=' + _encodedQuery)
          .then(function (res) { return res.json(); })
          .then(function (json) {
            resolve(json.data);
          });
      });
    },
  };

  var model = {
    offers: [],
    products: [],
    shops: [],
  };

  api.fetch().then(function (data) {
    Object.assign(model, data);
    console.log(model);
  });

}());
