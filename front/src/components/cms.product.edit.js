import React from 'react';

import axios from 'axios';

import products from '../products.app';
import settings from '../settings';
import clientApi from '../clientApi';
import app from '../app';

import '../css/cms.product.edit.css';

export default class CmsProductEdit extends React.Component {
  constructor(props) {
    super(props);

    const mode = props.prod ? 'edit' : 'add';
    
    this.state = {
      mode,
      prod: mode === 'add' ? products.create() : props.prod,
      selectedFile: null,
      loaded: 0,
    };

    this.handleChangeProduct = this.handleChangeProduct.bind(this); // whole product

    this.handleChangeBatch = this.handleChangeBatch.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeInitialPrice = this.handleChangeInitialPrice.bind(this);
    this.handleChangeSellingPrice = this.handleChangeSellingPrice.bind(this);
    this.handleChangeProductUnit = this.handleChangeProductUnit.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeShop = this.handleChangeShop.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);

    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.handleselectedFile = this.handleselectedFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleselectedFile = event => {
    const newState = Object.assign({}, this.state);
    newState.selectedFile = event.target.files[0];
    newState.loaded = 0;
    this.setState(newState);

    // autolaunch upload
    setTimeout(this.handleUpload, 400);
  };

  handleUpload = () => {
    const data = new FormData(),
      name = products.imgFilename(this.state.prod);

    data.append('type', 'prod');
    data.append('imgFile', this.state.selectedFile, name);

    axios
      .post('/upload', data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      })
      .then(res => {
        const newState = Object.assign({}, this.state);
        newState.selectedFile = null;
        const imgUrl = products.imgUrl(newState.prod.id);
        newState.prod.gallery[0] = `${imgUrl}?${Date.now()}`;
        this.setState(newState);
        console.log(res.statusText);
      });
  };

  handleChangeProduct(prod) {
    const newState = Object.assign({}, this.state);
    newState.prod = prod;
    this.setState(newState);
  }

  handleChangeBatch(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.batch = event.target.checked;
    this.setState(newState);
  }

  handleChangeShop(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.shop = parseInt(event.target.value, 10);
    this.setState(newState);
  }

  handleChangeCategory(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.category = parseInt(event.target.value, 10);
    this.setState(newState);
  }

  handleChangeDesc(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.desc = event.target.value;
    this.setState(newState);
  }

  handleChangeInitialPrice(event) {
    const newState = Object.assign({}, this.state);
    const value = parseFloat(event.target.value);
    newState.prod.price.initial = value;
    newState.prod.price.selling = value / 2;
    this.setState(newState);
  }

  handleChangeSellingPrice(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.price.selling = parseFloat(event.target.value);
    this.setState(newState);
  }

  handleChangeProductUnit(event) {
    const newState = Object.assign({}, this.state);
    newState.prod.quantity.unit = event.target.value;
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

  async handleSave() {
    const res = await clientApi.productCreate(this.state.prod);
    this.handleChangeProduct(res.productCreate);
    app.action('product_list');
  }
  handleCancel() {
    app.go('product_list');
  }

  render() {
    const prod = this.state.prod;
    const hasPhoto = prod.gallery.length > 0;
    const hasSelectedFile = this.state.selectedFile !== null;
    const selectedShop = settings.getShop(prod.shop);
    
    return (
      <div className="product-edit">
        <div className="sticky-header">
          <div className="wrapper">
            <button onClick={this.handleCancel}>X</button>
            <button onClick={this.handleSave} disabled={false}>Valider</button>
          </div>
        </div>
        <div className="product-edit__photos">
          <div className="wrapper">
            <h2>Photo <span className="colorRed">*</span></h2>
            <div
              className="product-edit__photo"
              style={
                hasPhoto
                  ? {
                      backgroundImage: 'url(' + prod.gallery[0] + ')',
                    }
                  : { backgroundColor: '#ddd' }
              }
            >
              { !hasPhoto ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path strokeWidth="6" d="m33,9c-1.63688,0 -3.06435,0.55366 -4.28125,1.4375c-1.18359,0.85965 -2.20542,2.12217 -2.59375,3.84375c-0.00096,0.004 -0.0303,-0.004 -0.03125,0l-0.03125,0.125l-2.5625,10.59375l-8.59375,0c-5.46165,0 -9.90625,4.53084 -9.90625,10l0,46c0,5.4692 4.4446,10 9.90625,10l60.09375,0a3.0003,3.0003 0 1 0 0,-6l-60.09375,0c-2.2031,0 -3.90625,-1.7132 -3.90625,-4l0,-46c0,-2.28684 1.70315,-4 3.90625,-4l70.1875,0c2.2031,0 3.90625,1.71317 3.90625,4l0,46c0,2.2868 -1.70315,4 -3.90625,4a3.0003,3.0003 0 1 0 0,6c5.46165,0 9.90625,-4.5308 9.90625,-10l0,-46c0,-5.46917 -4.4446,-10 -9.90625,-10l-8.59375,0l-2.5625,-10.59375c-0.009,-0.0449 -0.02137,-0.0807 -0.03125,-0.125l-0.03125,0c-0.38833,-1.72158 -1.41016,-2.9841 -2.59375,-3.84375c-1.2169,-0.88384 -2.64437,-1.4375 -4.28125,-1.4375l-34,0zm0,6l34,0c0.05803,0 0.47373,0.0806 0.75,0.28125c0.20721,0.15049 0.29319,0.33085 0.3125,0.34375a3.0003,3.0003 0 0 0 0.03125,0.0625l2.25,9.3125l-40.6875,0l2.25,-9.3125a3.0003,3.0003 0 0 0 0.03125,-0.0625c0.01931,-0.01291 0.1053,-0.19326 0.3125,-0.34375c0.27627,-0.20066 0.69197,-0.28125 0.75,-0.28125zm17,20c-12.66701,0 -23,10.33296 -23,23c0,12.667 10.33299,23 23,23c12.66701,0 23,-10.333 23,-23c0,-12.66704 -10.33299,-23 -23,-23zm0,6c9.42437,0 17,7.5756 17,17c0,9.4244 -7.57563,17 -17,17c-9.42437,0 -17,-7.5756 -17,-17c0,-9.4244 7.57563,-17 17,-17zm-8.34375,13.96875a3.0003,3.0003 0 0 0 -2.65625,3.03125c0,6.0396 4.9604,11 11,11a3.0003,3.0003 0 1 0 0,-6c-2.79696,0 -5,-2.2031 -5,-5a3.0003,3.0003 0 0 0 -3.0625,-3.03125a3.0003,3.0003 0 0 0 -0.28125,0z"/></svg>
              ) : ''}
              <input
                type="file"
                onChange={this.handleselectedFile}
                style={{ display: hasSelectedFile === false ? '' : 'none' }}
              />
            </div>
            {hasSelectedFile && (
              <button onClick={this.handleUpload}>
                {'Télécharger ' + _progressLabel(this.state.loaded)}
              </button>
            )}
          </div>
        </div>
        <div className="wrapper">
        <h2>Description</h2>

        <div className="product-edit__form__field">
          <label htmlFor="product_title">Titre <span className="colorRed">*</span></label>
          <input
            type="text"
            id="product_title"
            onChange={this.handleChangeTitle}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_initial">Prix initial <span className="colorRed">*</span></label>
          <input
            type="number"
            id="product_price_initial"
            onChange={this.handleChangeInitialPrice}
            value={prod.price.initial}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_final">Prix de vente <span className="colorRed">*</span></label>
          <input
            type="number"
            id="product_price_final"
            onChange={this.handleChangeSellingPrice}
            value={prod.price.selling}
          />
        </div>
      
        <div className="product-edit__form__field">
          <input id="product_price_precise" type="checkbox" value={prod.batch} onClick={this.handleChangeBatch} />
          <label htmlFor="product_price_precise">Prix "à partir de"</label>
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
          <label htmlFor="product_category">Catégorie</label>
          <select
            id="product_category"
            value={prod.category}
            onChange={this.handleChangeCategory}
          >
            {settings.productCategories.map(cat_ => (
              <option value={cat_.id} key={cat_.id}>
                {cat_.val}
              </option>
            ))}
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_quantity_type">Le prix concerne</label>
          <select
            id="product_quantity_type"
            onChange={this.handleChangeProductUnit}
            value={prod.quantity.unit}
          >
            {settings.productUnits.map(cat_ => (
              <option value={cat_.unit} key={cat_.id}>
                {cat_.label}
              </option>
            ))}
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_quantity">Stock</label>
          <input
            type="number"
            id="product_quantity"
            value={prod.quantity.val}
            onChange={this.handleChangeQuantity}
          />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_location">Point de vente</label>
          <select
            id="product_location"
            onChange={this.handleChangeShop}
            value={selectedShop.id}
          >
            {settings.shops.map(shop_ => (
              <option value={shop_.id} key={shop_.id}>
                {shop_.name}
              </option>
            ))}
          </select>
        </div>

        {/* <button className="big-button" onClick={this.handleSave}>
          Enregistrer
        </button> */}
        </div>
      </div>
    );
  }
}

function _progressLabel(value_) {
  const _percent = Math.round(value_, 2);
  return _percent === 0 ? '' : '' + _percent + ' %';
}
