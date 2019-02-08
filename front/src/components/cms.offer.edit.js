import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import React from 'react';
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
    offerArea.style.width = '200px';
    offerDelProd.forEach(n => (n.style.display = 'none'));

    domtoimage.toBlob(offerArea).then(function(blob) {
      FileSaver.saveAs(blob, 'my-node.jpg');
      offerArea.style.width = '';
      offerDelProd.forEach(n => (n.style.display = ''));
    });
  }
  render() {
    const prods = model.offer.offer_products;
    return (
      <div className="wrapper">
        <div className="offer-edit__export">
          <button onClick={this.exportImage}>Exporter pour Facebook</button>
        </div>
        <div className="offer-edit__add-product">
          {/* <button
            onClick={function(e) {
              e.preventDefault();
              app.action('offer_product_add_display_modal');
            }}
          >
            Ajouter un produit
          </button> */}
        </div>
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
                {/* <button className="offer-edit__product__delete">x</button> */}
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
                      {prod.price.selling}€
                    </span>
                    <span className="offer-edit__product__price__initial">
                      {prod.price.initial}€
                    </span>
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
