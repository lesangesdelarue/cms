import React from 'react';

import CmsOfferList from './cms.offer.list';
import CmsOfferEdit from './cms.offer.edit';
import CmsProductList from './cms.product.list';
import CmsProductEdit from './cms.product.edit';

const routes = Routes();

export default { routes };

function Routes() {
  return {
    offer_edit() {
      return <CmsOfferEdit mode="edit" />;
    },
    offer_create() {
      return <CmsOfferEdit mode="create" />;
    },
    offer_list() {
      return <CmsOfferList />;
    },
    offer_product_add() {
      return <CmsProductList mode="product_add" />;
    },
    product_create() {
      return <CmsProductEdit />;
    },
    product_edit() {
      return <CmsProductEdit />;
    },
    product_list() {
      return <CmsProductList mode="list" />;
    },
  };
}
