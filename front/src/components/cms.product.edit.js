import React from 'react';

import products from '../products';
import settings from '../settings';

export default class CmsProductEdit extends React.Component {
  constructor(props) {
    super(props);

    const mode = props.prod ? 'edit' : 'add';

    this.state = {
      mode,
      prod: mode === 'add' ? products.create() : props.prod,
    };

    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeInitialPrice = this.handleChangeInitialPrice.bind(this);
    this.handleChangeSellingPrice = this.handleChangeSellingPrice.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);

    this.handleSave = this.handleSave.bind(this);
  }

  handleChangeDesc(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.desc = event.target.value;
    this.setState(newState);
  }

  handleChangeInitialPrice(event) {
    const newState = Object.assign({}, this.state);
    const value = parseInt(event.target.value, 10);
    newState.prod.price.initial = value;
    newState.prod.price.selling = value / 2;
    this.setState(newState);
  }

  handleChangeSellingPrice(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.price.selling = parseInt(event.target.value, 10);
    this.setState(newState);
  }

  handleChangeQuantity(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.quantity.val = parseInt(event.target.value, 10);
    this.setState(newState);
  }

  handleChangeTitle(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.title = event.target.value;
    this.setState(newState);
  }

  handleSave() {
    console.log(this.state.prod);
  }

  render() {
    const prod = this.state.prod;
    const hasPhoto = prod.gallery.length > 1;

    return (
      <div className="wrapper product-edit">
        <h2>Photos</h2>
        <div className="product-edit__photos">
          <div
            className="product-edit__photo"
            style={
              hasPhoto
                ? {
                    backgroundImage: 'url(' + prod.gallery[0] + ')',
                  }
                : { backgroundColor: '#eee' }
            }
          >
            {hasPhoto && (
              <button className="product-edit__photo__delete">x</button>
            )}
          </div>
          <button className="product-edit__photo__add">
            Ajouter une photo
          </button>
        </div>
        <h2>Description</h2>

        <div className="product-edit__form__field">
          <label htmlFor="product_title">Titre</label>
          <input
            type="text"
            id="product_title"
            onChange={this.handleChangeTitle}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_description">Description</label>
          <input
            type="text"
            id="product_description"
            onChange={this.handleChangeDesc}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_location">Point de vente</label>
          <select id="product_location">
            {settings.shops.map(shop_ => (
              <option value={shop_.id} key={shop_.id}>
                {shop_.name}
              </option>
            ))}
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_category">Catégorie</label>
          <select id="product_category">
            {settings.productCategories.map(cat_ => (
              <option value={cat_.id} key={cat_.id}>
                {cat_.val}
              </option>
            ))}
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_quantity_type">Type de quantité</label>
          <select id="product_quantity_type">
            {settings.productUnits.map(cat_ => (
              <option value={cat_.id} key={cat_.id}>
                {cat_.label}
              </option>
            ))}
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_quantity">Quantité</label>
          <input
            type="number"
            id="product_quantity"
            value={prod.quantity.val}
            onChange={this.handleChangeQuantity}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_scope">Ce que concerne le prix</label>
          <select id="product_price_scope">
            {settings.productUnits.map(cat_ => (
              <option value={cat_.id} key={cat_.id}>
                {cat_.label}
              </option>
            ))}
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_precise">Prix "à partir de"</label>
          <select id="product_price_precise">
            <option value="0">Non</option>
            <option value="1">Oui</option>
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_initial">Prix initial</label>
          <input
            type="number"
            id="product_price_initial"
            onChange={this.handleChangeInitialPrice}
            value={prod.price.initial}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_final">Prix de vente</label>
          <input
            type="number"
            id="product_price_final"
            onChange={this.handleChangeSellingPrice}
            value={prod.price.selling}
          />
        </div>

        <button className="product-edit__form__save" onClick={this.handleSave}>
          Enregistrer
        </button>
      </div>
    );
  }
}
