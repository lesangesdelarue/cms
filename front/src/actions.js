import user from './user';

const actions = {
  disconnect: user.disconnect,
  async connect(app, actionId, params) {
    return user.connect(
      app,
      params,
    );
  },
  offer_add_product,
  offer_create,
};

[
  'offer_edit',
  'offer_list',
  'offer_product_add_display_modal',
  'product_create',
  'product_edit',
  'product_list',
].forEach(k => {
  actions[k] = _go;
});

export default actions;

function offer_create(app, actionId) {
  app.setState({ offer: { edit: { products: [] } } });
  app.go(actionId);
}

function _go(app, actionId) {
  app.go(actionId);
}

function offer_add_product(app, actionId, payload) {
  console.log('TODO, add product to offer');
  console.log(payload);
}
