import FileSaver from 'file-saver';
import html2canvas from 'html2canvas';
import React from 'react';

import settings from '../settings';
import model from '../model';

export default class CmsOfferEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = { snapping: false };
    this.exportImage = this.exportImage.bind(this);
  }

  exportImage() {
    const offerArea = document.getElementById('offer-area');
    const offerDelProd = document.querySelectorAll(
      '.offer-edit__product__delete',
    );
    offerArea.style.width = '300px';
    offerDelProd.forEach(n => (n.style.display = 'none'));

    html2canvas(offerArea, { width: 300 }).then(function(canvas) {
      canvas.toBlob(
        function(blob) {
          FileSaver.saveAs(blob, 'promotion.jpg');
          offerArea.style.width = '';
          offerDelProd.forEach(n => (n.style.display = ''));
        },
        'image/jpeg',
        0.92,
      );
    });
  }
  render() {
    const prods = model.offer.offer_products;
    return (
      <div className="wrapper">
        <div className="offer-edit__export">
          <button onClick={this.exportImage}>Exporter pour Facebook</button>
        </div>
        <div className="offer-edit__add-product" />
        <div id="offer-area">
          {prods.map(prod => {
            const imgUrl = prod.gallery[0];
            return (
              <div
                className="offer-edit__product"
                key={prod.id}
                style={{
                  backgroundImage: 'url(' + imgUrl + ')',
                }}
              >
                <div className="offer-edit__product__title">{prod.title}</div>
                <div className="offer-edit__product__price">
                  <div className="offer-edit__product__price__content">
                    <span
                      className="offer-edit__product__price__precise"
                      style={{ display: 'none' }}
                    >
                      à partir de
                    </span>
                    <span className="offer-edit__product__price__final">
                      <span style={{ fontSize: '0.7em' }}>
                        {prod.batch === true ? 'à partir de ' : ''}
                      </span>
                      {prod.price.selling}
                      <img src="img/ui/euro.svg" alt="euro" width="16rem" />
                      <span>{settings.getProductQuantity(prod.quantity)}</span>
                    </span>
                    {prod.batch === false && (
                      <span className="offer-edit__product__price__initial">
                        {prod.price.initial}
                        <img src="img/ui/euro.svg" alt="euro" width="11rem" />
                        <span>
                          {settings.getProductQuantity(prod.quantity)}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
