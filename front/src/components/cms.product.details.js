import React from 'react';

import model from '../model';

import settings from '../settings';
import app from '../app';

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
        {isProductSelected === true && (
          <span className="product-offer-selected">Sélectionné</span>
        )}
        <div
          className="product__image"
          style={{
            backgroundImage:
              'url(' + process.env.PUBLIC_URL + p.gallery[0] + ')',
          }}
        />
        <ul className="product__description">
          <li>
            <strong>{p.title}</strong>
          </li>
          <li>
            {p.batch === true && (
              <span style={{ display: 'inline' }}>à partir de</span>
            )}
            <span className="product__price__initial">{p.price.initial}€ </span>
            <span className="product__price__final">{p.price.selling}€ </span>
            <span>{settings.getProductQuantity(p.quantity)}</span>
          </li>
          {p.desc && <li className="product__info--secondary">{p.desc}</li>}
          <li className="product__info--secondary">
            {p.quantity.val}{' '}
            {p.quantity.unit === '' ? 'exemplaires' : p.quantity.unit}
          </li>
          <li key={shop.id} className="product__info--secondary">
            {shop.name}
          </li>

          <li className="product__info--secondary">
            {settings.getProductCategory(p.category)}
          </li>
        </ul>
      </div>
    );
  }
}
