const app = {
  setState: null,
  getState: null,
  auth: {
    onConnectSubmit,
    onDisconnect,
  },
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
