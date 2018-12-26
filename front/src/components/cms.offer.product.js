import React from 'react';

export default class CmsOfferProduct extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.props.imgUrl + ')',
    };

    return <div class="offer__product" style={divStyle} />;
  }
}
