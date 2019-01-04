import React from 'react';

import api from '../api';
import app from '../app';

import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import CmsOfferProduct from './cms.offer.product';

export default class CmsOfferList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: { page: null, items: [] },
    };

    this.exportImage = this.exportImage.bind(this);
  }
  async componentDidMount() {
    const res = await api.offers();
    this.setState({ offers: res.offers });
  }
  exportImage() {
    const node = document.getElementById('offer-area');

    domtoimage.toBlob(node).then(function(blob) {
      FileSaver.saveAs(blob, 'my-node.png');
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="offers__add">
          <button data-key="offer_edit" onClick={app.onNavClick}>
            Ajouter une promotion
          </button>
          <button onClick={this.exportImage}>Export</button>
        </div>

        {this.state.offers.items.map(offer_ => (
          <CmsOfferProduct key={offer_.id} offer={offer_} />
        ))}

        <div id="offer-area">
          <div
            className="offer-edit__product"
            style={{
              backgroundImage: 'url(extraimg/rick_morty_0.jpg)',
            }}
          >
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
      </div>
    );
  }
}
