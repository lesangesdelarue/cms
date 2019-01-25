import React from 'react';

import clientApi from '../clientApi';
import app from '../app';

import CmsOfferProduct from './cms.offer.product';

export default class CmsOfferList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offerList: { page: null, items: [] },
    };
  }
  async componentDidMount() {
    const res = await clientApi.offerList();
    this.setState({ offerList: res.offerList });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="offers__add">
          <button data-key="offer_create" onClick={app.onNavClick}>
            Créer une promotion
          </button>
        </div>

        {this.state.offerList.items.map(offer_ => (
          <CmsOfferProduct key={offer_.id} offer={offer_} />
        ))}
      </div>
    );
  }
}
