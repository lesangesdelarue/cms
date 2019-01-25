import actions from './actions';

const app = {
  setState: null,
  getState: null,
  action,
  actionPayload,
  // onAction,
  // onActionPayload,
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

// function onAction(e) {
//   console.log('.');
//   e.preventDefault();
//   const actionId = e.target.getAttribute('data-action');
//   actions[actionId](app, actionId);
// }

// function onActionPayload(e) {
//   e.preventDefault();
//   const actionId = e.target.getAttribute('data-action'),
//     actionPayload = e.target.getAttribute('data-payload');
//   actions[actionId](app, actionId, actionPayload);
// }
