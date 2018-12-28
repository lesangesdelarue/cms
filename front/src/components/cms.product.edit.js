import React from 'react';

export default class CmsProductEdit extends React.Component {
  render() {
    return (
      <div className="wrapper product-edit">
        <h2>Photos</h2>
        <div className="product-edit__photos">
          <div
            className="product-edit__photo"
            style={{
              backgroundImage:
                'url(http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-05/rick_morty_0.jpg)',
            }}
          >
            <button className="product-edit__photo__delete">x</button>
          </div>
          <button className="product-edit__photo__add">
            Ajouter une photo
          </button>
        </div>
        <h2>Description</h2>

        <div className="product-edit__form__field">
          <label htmlFor="product_title">Titre</label>
          <input type="text" id="product_title" />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_description">Description</label>
          <input type="text" id="product_description" />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_location">Point de vente</label>
          <select id="product_location">
            <option>Grand Marché Solidaire Lattes</option>
            <option>Epicerie Solidaire Gigean</option>
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_category">Catégorie</label>
          <select id="product_category">
            <option>Vêtements</option>
            <option>Décorations</option>
            <option>Bricolage & Matériaux de construction</option>
            <option>Maison</option>
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_quantity_type">Type de quantité</label>
          <select id="product_quantity_type">
            <option>Nombre</option>
            <option>Poids (kg)</option>
            <option>Volume (L)</option>
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_quantity">Quantité</label>
          <input type="text" id="product_quantity" />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_scope">Ce que concerne le prix</label>
          <select id="product_price_scope">
            <option>1 unité d'un produit</option>
            <option>1kg de produit (poids)</option>
            <option>1L de produit (volume)</option>
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_precise">Prix "à partir de"</label>
          <select id="product_price_precise">
            <option>Non</option>
            <option>Oui</option>
          </select>
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_initial">Prix initial</label>
          <input type="text" id="product_price_initial" />
        </div>

        <div className="product-edit__form__field">
          <label htmlFor="product_price_final">Prix de vente</label>
          <input type="text" id="product_price_final" />
        </div>

        <button className="product-edit__form__save">Enregistrer</button>
      </div>
    );
  }
}
