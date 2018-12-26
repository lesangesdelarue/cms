import React from 'react';

import gstate from '../gstate';
import NavTop from './nav.top';

import CmsOfferList from './cms.offer.list';

export default class Cms extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.state = gstate;
  }
  render() {
    return (
      <div>
        <NavTop />
        <div class="wrapper">
          <CmsOfferList />
        </div>
      </div>
    );
  }
}
