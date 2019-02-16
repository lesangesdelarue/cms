import React from 'react';

import model from '../model';

import settings from '../settings';
import app from '../app';

import '../css/cms.product.details.css';

export default class CmsProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mode: props.mode, p: props.prod, offer: model.offer };
    this.handleToggleProduct = this.handleToggleProduct.bind(this);
  }

  handleToggleProduct(e) {
    e.preventDefault();
    if (this.state.mode === 'offer_product_add_display_modal') {
      const newState = Object.assign({}, this.state);
      app.actionPayload('offer_toggle_product', this.state.p);
      newState.offer = model.offer;
      this.setState(newState);
    }
  }

  render() {
    const p = this.state.p;
    const shop = settings.getShop(p.shop);
    const isOfferPick = this.state.mode === 'offer_product_add_display_modal';
    const isProductSelected =
      isOfferPick === false
        ? false
        : model.offer.offer_products.findIndex(id => id === p.id) > -1;

    return (
      <div
        className={'product' + (isProductSelected === true ? ' selected' : '')}
        onClick={this.handleToggleProduct}
      >
        <div
          className="product__image"
          style={{
            backgroundImage:
              'url(' + process.env.PUBLIC_URL + p.gallery[0] + ')',
          }}
        />
        <div class="product__desc">
          <span>{p.title}</span>
          {p.desc && <span>{p.desc}</span>}
        </div>
        <div class="product__cat">
          <span>{settings.getProductCategory(p.category)}</span>
          <span>{shop.name}</span>
        </div>
        <div class="product__qty">
          {p.quantity.val}{' '}
          {p.quantity.unit === '' ? 'exemplaires' : p.quantity.unit}
        </div>
        <div class="product__price">
          {p.batch === true && ('à partir de ')}
          {p.batch === false && (<span>{p.price.initial}€</span>)}
          <strong>{p.price.selling}€</strong>
          {settings.getProductQuantity(p.quantity) !== '' && (<span>{settings.getProductQuantity(p.quantity)}</span>)}
        </div>
      </div>
    );
  }
}
