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
      <div>
        {mode === 'product_list' && (
          <div className="wrapper">
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
          <div>
            <div className="sticky-header">
              <div className="wrapper">
                <button onClick={this.handleCancel}>X</button>
                <button onClick={this.handleSave}>Valider</button>
              </div>
            </div>
            <div className="ticky-header__title">
              Cliquer sur les produits à inclure dans la promotion
            </div>
          </div>
        )}
        {this.state.productList.items.map(prod_ => (
          <div className="wrapper">
            <CmsProductDetails key={prod_.id} prod={prod_} mode={mode} />
          </div>
        ))}
      </div>
    );
  }
}
