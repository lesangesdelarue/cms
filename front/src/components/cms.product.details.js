import React from 'react';

import settings from '../settings';
import app from '../app';

export default function CmsProductDetails(props) {
  const p = props.prod;
  const shop = settings.getShop(p.shop);
  return (
    <div
      className="product"
      onClick={function(e) {
        app.actionPayload('offer_add_product', p);
      }}
    >
      <div
        className="product__image"
        style={{
          backgroundImage: 'url(' + process.env.PUBLIC_URL + p.gallery[0] + ')',
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
