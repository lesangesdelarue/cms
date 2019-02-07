import clientApi from './clientApi';
import model from './model';
import user from './user';

import offerApp from './offers.app';

const actions = {
  disconnect: user.disconnect,
  async connect(app, actionId, params) {
    return user.connect(app, params);
  },
  offer_toggle_product,
  offer_create,
  offer_save,
};

[
  'offer_edit',
  'offer_list',
  'product_create',
  'product_edit',
  'product_list',
].forEach(k => {
  actions[k] = _go;
});

export default actions;

function offer_create(app, actionId) {
  const offer = offerApp.create();
  model.offer = offer;
  app.setState({ offer });
  app.go('offer_product_add_display_modal');
}

async function offer_save(app, actionId) {
  await clientApi.offerCreate(model.offer);
  app.go('offer_list');
}

function _go(app, actionId) {
  app.go(actionId);
}

function offer_toggle_product(app, actionId, product) {
  const findIndex = model.offer.offer_products.findIndex(
    id => product.id === id,
  );

  if (findIndex === -1) {
    model.offer.offer_products.push(product.id);
  } else {
    model.offer.offer_products.splice(findIndex, 1);
  }
}
