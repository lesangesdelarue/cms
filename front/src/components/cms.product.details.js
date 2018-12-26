import React from 'react';

export default function CmsProductDetails(props) {
  return (
    <div className="product">
      <div
        className="product__image"
        style={{
          backgroundImage: 'url(' + props.imgUrl + ')',
        }}
      />
      <ul className="product__description">
        <li>
          <strong>Titre du produit</strong>
        </li>
        <li>
          <span style={{ display: 'inline' }}>à partir de</span>
          <span className="product__price__initial">20€</span>
          <span className="product__price__final">10€</span>
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
