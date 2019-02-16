import React from 'react';

import api from '../clientApi';
import app from '../app';
import CmsProductDetails from './cms.product.details';

import '../css/cms.product.list.css';

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
        {mode === 'product_list' && (
          <div>
            <button
              onClick={e => {
                e.preventDefault();
                app.action('product_create');
              }}
              className="big-button"
            >
              Ajouter un produit
            </button>
            <div className="list-title">Produits enregistrés</div>
          </div>
        )}
        {mode === 'offer_product_add_display_modal' && (
          <div className="product__select__header">
            <div>
              <span>Cliquer sur les produits à inclure dans la promotion</span>
              <button onClick={this.handleSave}>Valider</button>
              <button onClick={this.handleCancel}>Annuler</button>
            </div>
          </div>
        )}

        {this.state.productList.items.map(prod_ => (
          <CmsProductDetails key={prod_.id} prod={prod_} mode={mode} />
        ))}
      </div>
    );
  }
}
