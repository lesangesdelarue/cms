import React from 'react';

import api from '../clientApi';
import app from '../app';
import CmsProductDetails from './cms.product.details';

export default class CmsProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: props.mode,
      productList: { page: null, items: [] },
    };
  }
  async componentDidMount() {
    const res = await api.productList();
    this.setState({ productList: res.productList });
  }
  render() {
    const { mode } = this.state;
    return (
      <div className="wrapper">
        <div className="product__create">
          {mode === 'product_list' && (
            <button
              onClick={e => {
                e.preventDefault();
                app.action('product_create');
              }}
            >
              Créer un produit
            </button>
          )}
          {mode === 'offer_product_add_display_modal' && (
            <span>Sélectionner les produits à ajouter</span>
          )}
        </div>

        {this.state.productList.items.map(prod_ => (
          <CmsProductDetails key={prod_.id} prod={prod_} mode={mode} />
        ))}
      </div>
    );
  }
}
