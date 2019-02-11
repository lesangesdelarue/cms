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
      return <CmsOfferEdit />;
    },
    offer_list() {
      return <CmsOfferList />;
    },
    offer_delete_display_modal() {
      return <CmsOfferList />;
    },
    offer_product_add_display_modal() {
      return <CmsProductList mode="offer_product_add_display_modal" />;
    },
    product_create() {
      return <CmsProductEdit />;
    },
    product_edit() {
      return <CmsProductEdit />;
    },
    product_list() {
      return <CmsProductList mode="product_list" />;
    },
  };
}
