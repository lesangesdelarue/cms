import user from './user';

const actions = {
  disconnect: user.disconnect,
  async connect(app, actionId, params) {
    return user.connect(
      app,
      params,
    );
  },
};

[
  'offer_create',
  'offer_edit',
  'offer_list',
  'offer_product_add',
  'product_create',
  'product_edit',
  'product_list',
].forEach(k => {
  actions[k] = _go;
});

export default actions;

function _go(app, actionId) {
  app.go(actionId);
}
