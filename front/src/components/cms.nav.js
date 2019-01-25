import React from 'react';

import app from '../app';

export default function CmsNav() {
  return (
    <div className="nav" onClick={app.onNavClick}>
      <div className="nav__left">
        {_link('product_list', 'Produits')}
        {_link('offer_list', 'Promotions')}
      </div>
      <div className="nav__right">{_link('disconnect', 'Déconnexion')}</div>
    </div>
  );
}

function _link(key, label) {
  const { current } = app.getState().nav;
  return (
    <button
      className={'link' + (current[0] === key[0] ? ' active' : '')}
      data-key={key}
    >
      {label}
    </button>
  );
}
