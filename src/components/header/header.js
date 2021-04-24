import React from 'react'

import './header.scss';

//  START - imagens
import logoJussi from '../img/logo-jussi.png';
import carrinho from '../img/carrinho.png';

//  END - imagens



function Header() {


  
  return (

      <header className="HomePage__HomeHeader">
        <div className="HomePage__HomeHeader__logoHeader"><img src={logoJussi} alt={"Logo Jussi"} /></div>

        <div className="HomePage__HomeHeader__info-header">
          <span> Nossas soluções</span>
          <span> Conheça a Jussi</span>
        </div>

        <div className="HomePage__HomeHeader__search-header">
          <span className="HomePage__HomeHeader__search-input">Buscar</span>
        </div>

        <div className="HomePage__HomeHeader__login-cart">
          <span className="HomePage__HomeHeader__login">Login</span>
          <span><img src={carrinho} alt={"Carrinho"} /></span>
        </div>

      </header>



  );


}

export default Header;
