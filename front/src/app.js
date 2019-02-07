import actions from './actions';

const app = {
  setState: null,
  getState: null,
  action,
  actionPayload,
  go,
};

export default app;

function action(actionId) {
  return actions[actionId](app, actionId);
}

function actionPayload(actionId, payload) {
  return actions[actionId](app, actionId, payload);
}

function go(newRoute) {
  const { route } = app.getState();
  if (route === newRoute) return;
  app.setState({ route: newRoute });
}
