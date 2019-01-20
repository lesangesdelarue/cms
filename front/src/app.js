import api from './clientApi';
import settings from './settings';

const app = {
  setState: null,
  getState: null,

  auth: {
    onConnectSubmit,
    onDisconnect,
  },
  offer: {
    openProductList() {
      console.log('TODO openProductList');
    },
    removeProduct() {
      console.log('TODO removeProduct');
    },
  },
  go,
  onNavClick,
};

export default app;

async function onConnectSubmit(params) {
  const res = await api.connect(params);

  if (res.connected === true) {
    Object.assign(settings, {
      shops: res.shops,
      productCategories: res.productCategories,
      productConditions: res.productConditions,
      productUnits: res.productUnits,
    });
  }

  app.setState({
    auth: {
      connected: res.connected,
      error: !res.connected,
      login: res.login,
    },
  });
}

function onDisconnect() {
  app.setState({ auth: { connected: false } });
}

function go(key) {
  const { current } = app.getState().nav;
  if (key === null || key === current) return;
  if (key === 'disconnect') {
    app.auth.onDisconnect();
    return;
  }
  app.setState({ nav: { current: key } });
}

function onNavClick(e) {
  const key = e.target.getAttribute('data-key');
  go(key);
}
