import React from 'react';

import app from '../app';
import CmsProductDetails from './cms.product.details';

export default function CmsProductList() {
  return (
    <div className="wrapper">
      <div className="products__add">
        <button data-key="product_edit" onClick={app.onNavClick}>
          Ajouter un produit
        </button>
      </div>
      <CmsProductDetails imgUrl="http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg" />
    </div>
  );
}
