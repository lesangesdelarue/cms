import React from 'react';

import app from '../app';

export default function CmsNav() {
  return (
    <div className="nav" onClick={app.onAction}>
      <div className="nav__left">
        {_link('product_list', 'Produits')}
        {_link('offer_list', 'Promotions')}
      </div>
      <div className="nav__right">{_link('disconnect', 'Déconnexion')}</div>
    </div>
  );
}

function _link(newRoute, label) {
  const { route } = app.getState();
  return (
    <button
      className={'link' + (route[0] === newRoute[0] ? ' active' : '')}
      onClick={function(e) {
        e.preventDefault();
        app.action(newRoute);
      }}
    >
      {label}
    </button>
  );
}
