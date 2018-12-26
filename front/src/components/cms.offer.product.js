import React from 'react';

export default function CmsOfferProduct(props) {
  return (
    <div
      className="offer__product"
      style={{
        backgroundImage: 'url(' + props.imgUrl + ')',
      }}
    />
  );
}
