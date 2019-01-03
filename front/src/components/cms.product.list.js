import React from 'react';

import api from '../api';
import app from '../app';
import CmsProductDetails from './cms.product.details';

export default class CmsProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: { page: null, items: [] },
    };
  }
  async componentDidMount() {
    const res = await api.products();
    this.setState({ products: res.products });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="products__add">
          <button data-key="product_add" onClick={app.onNavClick}>
            Ajouter un produit
          </button>
        </div>

        {this.state.products.items.map(prod_ => (
          <CmsProductDetails key={prod_.id} prod={prod_} />
        ))}
      </div>
    );
  }
}
