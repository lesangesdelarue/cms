import React from 'react';

import CmsOfferProduct from './cms.offer.product';

export default class CmsOfferList extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="offers__add">
          <button>Ajouter une promotion</button>
        </div>
        {_offer()}
        {_offer()}
        {_offer()}
      </div>
    );
  }
}

function _offer() {
  return (
    <div class="offer">
      <div class="offer__date">10/06/2019</div>
      <CmsOfferProduct imgUrl="http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg" />
      <CmsOfferProduct imgUrl="https://pmcvariety.files.wordpress.com/2017/10/rickandmorty.jpg?w=1000" />
      <CmsOfferProduct imgUrl="http://www.capturemag.net/wp-content/uploads/2015/10/RickMorty2Feat.png" />
    </div>
  );
}
