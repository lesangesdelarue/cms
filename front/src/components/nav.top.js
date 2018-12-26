import React from 'react';

export default function NavTop() {
  return (
    <div class="nav">
      <div class="nav__left">
        <a href="#">Produits</a>
        <a href="#" class="active">
          Promotions
        </a>
      </div>
      <div class="nav__right">
        <a href="#">Déconnexion</a>
      </div>
    </div>
  );
}
