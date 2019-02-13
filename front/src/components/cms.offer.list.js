import React from 'react';

import clientApi from '../clientApi';
import app from '../app';

import CmsOfferProduct from './cms.offer.product';

import '../css/cms.offer.list.css';

export default class CmsOfferList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'list',
      offerList: { page: null, items: [] },
      offers_to_delete: [],
    };
  }
  async componentDidMount() {
    const res = await clientApi.offerList();
    this.setState({ offerList: res.offerList });
  }

  render() {
    const { mode } = this.state;
    const _self = this;
    return (
      <div className="wrapper">
        {mode === 'list' ? (
          <div className="offers__add">
            <button onClick={e => app.action('offer_create')}>
              Créer une promotion
            </button>
            <button
              onClick={e =>
                _self.setState({ mode: 'delete', offers_to_delete: [] })
              }
            >
              Supprimer
            </button>
          </div>
        ) : (
          <div className="mtop-title">
            <div className="top-right-submit">
              <button
                onClick={e =>
                  _self.setState({ mode: 'list', offers_to_delete: [] })
                }
              >
                Annuler
              </button>
              <button
                onClick={e => {
                  clientApi
                    .offerDelete(_self.state.offers_to_delete)
                    .then(data => {
                      const deletedOffers = data.offerDelete,
                        filteredOfferItems = _self.state.offerList.items.filter(
                          offer => deletedOffers.includes(offer.id) === false,
                        );
                      _self.setState({
                        mode: 'list',
                        offerList: {
                          items: filteredOfferItems,
                          page: _self.state.offerList.page,
                        },
                        offers_to_delete: [],
                      });
                    });
                }}
              >
                Valider
              </button>
            </div>
          </div>
        )}

        {this.state.offerList.items.map(offer => (
          <div
            key={offer.id}
            onClick={
              mode === 'list'
                ? e => {
                    app.actionPayload('offer_edit', offer);
                  }
                : // mode === 'delete'
                  e => {
                    const { offers_to_delete } = _self.state,
                      findIndex = offers_to_delete.findIndex(
                        id => offer.id === id,
                      );

                    if (findIndex === -1) {
                      offers_to_delete.push(offer.id);
                    } else {
                      offers_to_delete.splice(findIndex, 1);
                    }
                    _self.setState({ offers_to_delete });
                  }
            }
          >
            <CmsOfferProduct
              offer={offer}
              mode={
                _self.state.offers_to_delete.includes(offer.id)
                  ? 'delete'
                  : 'list'
              }
            />
          </div>
        ))}
      </div>
    );
  }
}
