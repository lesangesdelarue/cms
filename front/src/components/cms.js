import React from 'react';

import CmsNav from './cms.nav';

import CmsOfferList from './cms.offer.list';
import CmsOfferEdit from './cms.offer.edit';
import CmsProductList from './cms.product.list';
import CmsProductEdit from './cms.product.edit';

import app from '../app';

const _navmap = {
  offer_edit() {
    return <CmsOfferEdit />;
  },
  offers() {
    return <CmsOfferList />;
  },
  product_edit() {
    return <CmsProductEdit />;
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
      {_navmap[current]()}
    </div>
  );
}
