const _query = `{
  shops {
    id
    name
    address
  }
  productCategories {
    id
    val
  }
  productConditions {
    id
    val
  }
  products {
    id
    batch
    condition
    created_at
    gallery
    title
    shops
    category
    condition
    price {
      initial
      selling
    }
    quantity {
      val
      unit
    }
  }
}`;

const query = queryPack(_query);

export default query;

function queryPack(query_) {
  return query_
    .replace(/\n/g, ' ')
    .replace(/ +(?= )/g, '')
    .replace(/ \{|\{ /g, '{')
    .replace(/ \{|\{ /g, '{')
    .replace(/ \}|\} /g, '}')
    .replace(/ \}|\} /g, '}');
}
