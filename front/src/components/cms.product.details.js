import React from 'react';

export default function CmsProductDetails(props) {
  const p = props.prod;
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
          <span style={{ display: 'inline' }}>à partir de</span>
          <span className="product__price__initial">{p.price.initial}€</span>
          <span className="product__price__final">{p.price.selling}€</span>
          <span>/ kg</span>
        </li>
        <li className="product__info--secondary">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </li>
        <li className="product__info--secondary">20 exemplaires</li>
        <li className="product__info--secondary">
          Grand Marché Solidaire Lattes
        </li>
        <li className="product__info--secondary">Catégorie</li>
      </ul>
    </div>
  );
}
