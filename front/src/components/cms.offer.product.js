import React from 'react';

import app from '../app';

export default function CmsOfferProduct(props) {
  const dt = new Date(props.offer.created_at * 1000).toLocaleDateString();
  const { offer } = props;
  return (
    <div
      className="offer"
      onClick={e => {
        e.preventDefault();
        app.actionPayload('offer_edit', offer);
      }}
    >
      <div className="offer__product">{dt}</div>
      {offer.offer_products.map(prod => (
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
