import React from 'react';

import CmsNav from './cms.nav';

import CmsOfferList from './cms.offer.list';
import CmsProductList from './cms.product.list';

import app from '../app';

const _navmap = {
  offers() {
    return <CmsOfferList />;
  },
  products() {
    return <CmsProductList />;
  },
};

export default function Cms() {
  const { current } = app.getState().nav;
  return (
    <div>
      <CmsNav />
      <div className="wrapper">{_navmap[current]()}</div>
    </div>
  );
}
