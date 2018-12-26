import gstate from './gstate';

export default {
  submit(params) {
    return new Promise(resolve => {
      setTimeout(() => {
        const res = { login: params.login, connected: true };
        gstate.auth = res;
        resolve(res);
      }, 400);
    });
  },
};
