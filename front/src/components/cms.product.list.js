import React from 'react';

import api from '../clientApi';
import app from '../app';
import CmsProductDetails from './cms.product.details';

export default class CmsProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: { page: null, items: [], mode: props.mode },
    };
  }
  async componentDidMount() {
    const res = await api.productList();
    this.setState({ productList: res.productList });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="product__create">
          <button data-key="product_create" onClick={app.onNavClick}>
            Créer un produit
          </button>
        </div>

        {this.state.productList.items.map(prod_ => (
          <CmsProductDetails key={prod_.id} prod={prod_} />
        ))}
      </div>
    );
  }
}
