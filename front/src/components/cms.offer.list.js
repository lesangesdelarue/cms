import React from 'react';

import api from '../api';
import app from '../app';
import CmsOfferProduct from './cms.offer.product';

export default class CmsOfferList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: { page: null, items: [] },
    };
  }
  async componentDidMount() {
    const res = await api.offers();
    this.setState({ offers: res.offers });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="offers__add">
          <button data-key="offer_edit" onClick={app.onNavClick}>
            Ajouter une promotion
          </button>
        </div>

        {this.state.offers.items.map(offer_ => (
          <CmsOfferProduct key={offer_.id} offer={offer_} />
        ))}
      </div>
    );
  }
}
