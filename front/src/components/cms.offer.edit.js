import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import React from 'react';
import app from '../app';

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
    return (
      <div className="wrapper">
        <div className="offer-edit__export">
          <button onClick={this.exportImage}>Exporter pour Facebook</button>
        </div>
        <div className="offer-edit__add-product">
          <button
            data-action="offer_product_add_display_modal"
            onClick={app.onAction}
          >
            Ajouter un produit
          </button>
        </div>
        <div id="offer-area">
          <div
            className="offer-edit__product"
            style={{
              backgroundImage: 'url(extraimg/rick_morty_0.jpg)',
            }}
          >
            <button className="offer-edit__product__delete">x</button>
            <div className="offer-edit__product__title">Nom du produit</div>
            <div className="offer-edit__product__price">
              <div className="offer-edit__product__price__content">
                <span
                  className="offer-edit__product__price__precise"
                  style={{ display: 'none' }}
                >
                  à partir de
                </span>
                <span className="offer-edit__product__price__final">25€</span>
                <span className="offer-edit__product__price__initial">50€</span>
              </div>
            </div>
          </div>
          <div
            className="offer-edit__product"
            style={{
              backgroundImage: 'url(extraimg/RickMorty2Feat.png)',
            }}
          >
            <button className="offer-edit__product__delete">x</button>
            <div className="offer-edit__product__title">Nom du produit</div>
            <div className="offer-edit__product__price">
              <div className="offer-edit__product__price__content">
                <span className="offer-edit__product__price__precise">
                  à partir de
                </span>
                <span className="offer-edit__product__price__final">
                  10€ /kg
                </span>
                <span className="offer-edit__product__price__initial">
                  20€ /kg
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-edit__add-product">
          <button
            data-action="offer_product_add_display_modal"
            onClick={app.onAction}
          >
            Ajouter un produit
          </button>
        </div>
      </div>
    );
  }
}
