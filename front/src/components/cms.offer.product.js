import React from 'react';

import '../css/cms.offer.product.css';

export default function CmsOfferProduct(props) {
  // const dt = new Date(props.offer.created_at * 1000).toLocaleDateString();
  const { offer } = props;

  return (
    <div className="offer">
      {props.mode === 'delete' && (
        <span className="top-right__button">
          <img src="img/ui/trash.svg" alt="delete" />
        </span>
      )}
      {offer.offer_products.map(prod => (
        <div
          className="offer__product"
          key={prod.id}
          style={{
            backgroundImage: 'url(' + prod.gallery[0] + ')',
          }}
        />
      ))}
    </div>
  );
}
