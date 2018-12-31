import conf from './conf';

if (!conf.USERS) console.error('missing USERS in .env');

const creds = conf.USERS.split(';').map(credline => {
  const _t = credline.split(':');
  return { user: _t[0], passwd: _t[1] };
});

export default {
  connect,
  verify,
};

function connect(req, res) {
  const { login, passwd } = req.body;
  const _isAllowed =
    creds.findIndex(cred => cred.user === login && cred.passwd === passwd) > -1;

  const data = {
    login,
    connected: _isAllowed,
    error: !_isAllowed,
  };

  if (_isAllowed === true) {
    Object.assign(data, {
      productCategories: conf.productCategories,
      productConditions: conf.productConditions,
      productUnits: conf.productUnits,
      shops: conf.shops,
    });
    req.session.connected = login;
  }

  res.send(data);
}

function verify(req, res, next) {
  if (conf.NODE_ENV === 'dev') {
    console.log('verify:' + req.session.connected);
  }

  if (req.session.connected === undefined) {
    res.status(401).send('');
  } else {
    next();
  }
}
