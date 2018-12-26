import React from 'react';

import app from '../app';

export default function CmsNav() {
  return (
    <div className="nav" onClick={_onClick}>
      <div className="nav__left">
        {_link('products', 'Produits')}
        {_link('offers', 'Promotions')}
      </div>
      <div className="nav__right">{_link('disconnect', 'Déconnexion')}</div>
    </div>
  );
}

function _link(key, label) {
  const { current } = app.getState().nav;
  return (
    <button
      className={'link' + (current === key ? ' active' : '')}
      data-key={key}
    >
      {label}
    </button>
  );
}

function _onClick(e) {
  const { current } = app.getState().nav;
  const key = e.target.getAttribute('data-key');
  if (key === null || key === current) return;
  if (key === 'disconnect') {
    app.auth.onDisconnect();
    return;
  }

  app.setState({ nav: { current: key } });
}
