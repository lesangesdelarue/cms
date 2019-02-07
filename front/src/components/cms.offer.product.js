import React from 'react';

export default function CmsOfferProduct(props) {
  const dt = new Date(props.offer.created_at * 1000).toLocaleDateString();
  return (
    <div className="offer">
      <div className="offer__product">{dt}</div>
      {props.offer.offer_products.map(prod => (
        <div
          className="offer__product"
          key={prod}
          style={{
            backgroundImage: 'url(img/prod/' + prod + '_0.jpg)',
          }}
        />
      ))}
    </div>
  );
}
