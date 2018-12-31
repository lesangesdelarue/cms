import React from 'react';

import api from '../api';
import app from '../app';
import CmsProductDetails from './cms.product.details';

export default class CmsProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const products = await api.products();
    this.setState({ products });
  }
  render() {
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
}
