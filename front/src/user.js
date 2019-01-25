import api from './clientApi';
import settings from './settings';

export default { connect, disconnect };

async function connect(app, params) {
  const res = await api.connect(params);

  if (res.connected === true) {
    Object.assign(settings, {
      shops: res.shops,
      productCategories: res.productCategories,
      productConditions: res.productConditions,
      productUnits: res.productUnits,
    });
  }

  const auth = {
    connected: res.connected,
    error: !res.connected,
    login: res.login,
  };

  app.setState({
    auth,
  });

  return auth;
}

function disconnect(app) {
  app.setState({ auth: { connected: false } });
}
