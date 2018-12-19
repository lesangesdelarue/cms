import uuiv4 from '../common/uuidv4';

const shops = {
  items: [],
  init,
};

export default shops;

async function init() {
  shops.items = await shopsFetchMock();
}

function shopsFetchMock() {
  const _items = [];

  for (let i = 0; i < 10; i += 1) {
    _items.push({
      shop_id: uuiv4(),
      address: 'shop address ' + i,
      info: 'shop info ' + i,
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(_items);
    }, 100);
  });
}
