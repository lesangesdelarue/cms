import React from 'react';
import app from '../app';

export default class CmsOfferEdit extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="offer-edit__export">
          <button>Exporter pour Facebook</button>
        </div>
        <div className="offer-edit__add-product">
          <button onClick={app.offer.openProductList}>
            Ajouter un produit
          </button>
        </div>
        <div
          className="offer-edit__product"
          style={{
            backgroundImage:
              'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
          }}
        >
          <button
            className="offer-edit__product__delete"
            onClick={app.offer.removeProduct}
          >
            x
          </button>
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
            backgroundImage:
              'url(http://www.capturemag.net/wp-content/uploads/2015/10/RickMorty2Feat.png)',
          }}
        >
          <button
            className="offer-edit__product__delete"
            onClick={app.offer.removeProduct}
          >
            x
          </button>
          <div className="offer-edit__product__title">Nom du produit</div>
          <div className="offer-edit__product__price">
            <div className="offer-edit__product__price__content">
              <span className="offer-edit__product__price__precise">
                à partir de
              </span>
              <span className="offer-edit__product__price__final">10€ /kg</span>
              <span className="offer-edit__product__price__initial">
                20€ /kg
              </span>
            </div>
          </div>
        </div>
        <div className="offer-edit__add-product">
          <button onClick={app.offer.openProductList}>
            Ajouter un produit
          </button>
        </div>
        <div id="productsList" className="offer-edit__products-list">
          <button
            className="offer-edit__products-list__close"
            onClick={app.offer.removeProduct}
          >
            x
          </button>
          <div className="wrapper">
            <div className="product">
              <div
                className="product__image"
                style={{
                  backgroundImage:
                    'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
                }}
              />
              <ul className="product__description">
                <li>
                  <strong>Titre du produit</strong>
                </li>
                <li>
                  <span style={{ display: 'inline' }}>à partir de</span>
                  <span className="product__price__initial">20€</span>
                  <span className="product__price__final">10€</span>
                  <span>/ kg</span>
                </li>
                <li className="product__info--secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li className="product__info--secondary">20 exemplaires</li>
                <li className="product__info--secondary">
                  Grand Marché Solidaire Lattes
                </li>
                <li className="product__info--secondary">Catégorie</li>
              </ul>
            </div>
            <div className="product">
              <div
                className="product__image"
                style={{
                  backgroundImage:
                    'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
                }}
              />
              <ul className="product__description">
                <li>
                  <strong>Titre du produit</strong>
                </li>
                <li>
                  <span style={{ display: 'inline' }}>à partir de</span>
                  <span className="product__price__initial">20€</span>
                  <span className="product__price__final">10€</span>
                  <span>/ kg</span>
                </li>
                <li className="product__info--secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li className="product__info--secondary">20 exemplaires</li>
                <li className="product__info--secondary">
                  Grand Marché Solidaire Lattes
                </li>
                <li className="product__info--secondary">Catégorie</li>
              </ul>
            </div>
            <div className="product">
              <div
                className="product__image"
                style={{
                  backgroundImage:
                    'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
                }}
              />
              <ul className="product__description">
                <li>
                  <strong>Titre du produit</strong>
                </li>
                <li>
                  <span style={{ display: 'inline' }}>à partir de</span>
                  <span className="product__price__initial">20€</span>
                  <span className="product__price__final">10€</span>
                  <span>/ kg</span>
                </li>
                <li className="product__info--secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li className="product__info--secondary">20 exemplaires</li>
                <li className="product__info--secondary">
                  Grand Marché Solidaire Lattes
                </li>
                <li className="product__info--secondary">Catégorie</li>
              </ul>
            </div>
            <div className="product">
              <div
                className="product__image"
                style={{
                  backgroundImage:
                    'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
                }}
              />
              <ul className="product__description">
                <li>
                  <strong>Titre du produit</strong>
                </li>
                <li>
                  <span style={{ display: 'inline' }}>à partir de</span>
                  <span className="product__price__initial">20€</span>
                  <span className="product__price__final">10€</span>
                  <span>/ kg</span>
                </li>
                <li className="product__info--secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li className="product__info--secondary">20 exemplaires</li>
                <li className="product__info--secondary">
                  Grand Marché Solidaire Lattes
                </li>
                <li className="product__info--secondary">Catégorie</li>
              </ul>
            </div>
            <div className="product">
              <div
                className="product__image"
                style={{
                  backgroundImage:
                    'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
                }}
              />
              <ul className="product__description">
                <li>
                  <strong>Titre du produit</strong>
                </li>
                <li>
                  <span style={{ display: 'inline' }}>à partir de</span>
                  <span className="product__price__initial">20€</span>
                  <span className="product__price__final">10€</span>
                  <span>/ kg</span>
                </li>
                <li className="product__info--secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li className="product__info--secondary">20 exemplaires</li>
                <li className="product__info--secondary">
                  Grand Marché Solidaire Lattes
                </li>
                <li className="product__info--secondary">Catégorie</li>
              </ul>
            </div>
            <div className="product">
              <div
                className="product__image"
                style={{
                  backgroundImage:
                    'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
                }}
              />
              <ul className="product__description">
                <li>
                  <strong>Titre du produit</strong>
                </li>
                <li>
                  <span style={{ display: 'inline' }}>à partir de</span>
                  <span className="product__price__initial">20€</span>
                  <span className="product__price__final">10€</span>
                  <span>/ kg</span>
                </li>
                <li className="product__info--secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </li>
                <li className="product__info--secondary">20 exemplaires</li>
                <li className="product__info--secondary">
                  Grand Marché Solidaire Lattes
                </li>
                <li className="product__info--secondary">Catégorie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
