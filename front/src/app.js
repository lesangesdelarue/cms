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
  const res = await connectSubmit(params);
  app.setState({ auth: { connected: res.connected } });
}

function onDisconnect() {
  app.setState({ auth: { connected: false } });
}

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
