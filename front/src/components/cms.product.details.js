import React from 'react';

import settings from '../settings';

export default function CmsProductDetails(props) {
  const p = props.prod;
  const shops = settings.getShops(p.shops);
  return (
    <div className="product">
      <div
        className="product__image"
        style={{
          backgroundImage:
            'url(' + process.env.PUBLIC_URL + '/img/' + p.gallery[0] + '.jpg)',
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
          <span className="product__price__initial">{p.price.initial}€</span>
          <span className="product__price__final">{p.price.selling}€</span>
          <span>/ kg</span>
        </li>
        <li className="product__info--secondary">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </li>
        <li className="product__info--secondary">20 exemplaires</li>
        {/* shops */}
        {shops.map(shop => (
          <li key={shop.id} className="product__info--secondary">
            {shop.name}
          </li>
        ))}
        <li className="product__info--secondary">
          {settings.getProductCategory(p.category)}
        </li>
      </ul>
    </div>
  );
}
