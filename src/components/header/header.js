import React from 'react'

import './header.scss';

//  START - imagens
import logoJussi from '../img/logo-jussi.png';
import carrinho from '../img/carrinho.png';

//  END - imagens



function Header() {


  
  return (

      <header className="header">
        {/* <div className="header__logo"><img src={logoJussi} alt={"Logo Jussi"} /></div> */}

        <div className="header__informations">
          <span> Nossas soluções</span>
          <span> Conheça a Jussi</span>
        </div>

        <div className="header__search-container">
        </div>

        <div className="header__login-cart">
          <span className="header__login">Login</span>
          <span><img src={carrinho} alt={"Carrinho"} /></span>
        </div>

      </header>



  );


}

export default Header;
