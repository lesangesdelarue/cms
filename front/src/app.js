import api from './api';

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
  onNavClick,
};

export default app;

async function onConnectSubmit(params) {
  const connectResponse = await connectSubmit(params);
  const gqlResponse = await api.initial();

  Object.assign(gqlResponse, {
    auth: { connected: connectResponse.connected },
  });
  app.setState(gqlResponse);
}

function onDisconnect() {
  app.setState({ auth: { connected: false } });
}

// [!] mock
async function connectSubmit(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      const res = { login: params.login, connected: true };
      resolve(res);
    }, 400);
  });
}

function onNavClick(e) {
  const { current } = app.getState().nav;
  const key = e.target.getAttribute('data-key');
  if (key === null || key === current) return;
  if (key === 'disconnect') {
    app.auth.onDisconnect();
    return;
  }

  app.setState({ nav: { current: key } });
}
