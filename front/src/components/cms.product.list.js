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

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  async componentDidMount() {
    const res = await api.productList();
    this.setState({ productList: res.productList });
  }

  handleCancel() {
    app.go('offer_list');
  }

  handleSave() {
    app.action('offer_save');
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
            <div>
              <div className="top-right-submit">
                <button onClick={this.handleCancel}>Annuler</button>
                <button onClick={this.handleSave}>Valider</button>
              </div>
            </div>
          )}
        </div>

        {this.state.productList.items.map(prod_ => (
          <CmsProductDetails key={prod_.id} prod={prod_} mode={mode} />
        ))}
      </div>
    );
  }
}
