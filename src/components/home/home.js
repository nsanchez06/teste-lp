import React from 'react'
import '../home/home.scss';
import logoJussi from '../img/logo-jussi.png';
import carrinho from '../img/carrinho.png';

function Home() {
  return (

  <div className="HomePage">
        <div className="HomePage__HomeHeader">
          <div className="HomePage__HomeHeader__logoHeader"><img src={logoJussi} alt={"Logo Jussi"}/></div>

          <div className="HomePage__HomeHeader__info-header">
            <span> Nossas soluções</span>
            <span> Conheça a Jussi</span>
          </div>

          <div className="HomePage__HomeHeader__search-header">
            <span className="HomePage__HomeHeader__search-input">Buscar</span>
          </div>

          <div className="HomePage__HomeHeader__login-cart">
            <span className="HomePage__HomeHeader__login">Login</span>
            <span><img src={carrinho} alt={"Carrinho"}/></span>
          </div>

        </div>

        <div className="HomePage__banner">
          <div className="HomePage__banner__wrapper">
            <div className="HomePage__banner__conteudo">
            <span className="HomePage__banner__details">//</span>
            <span className="HomePage__banner__text">criamos lojas que vendem mais.</span>
            <span className="HomePage__banner__text-dois">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</span>
            <div className="HomePage__banner__button">Veja nossas soluções</div>
            </div>
          </div>
        </div>

    </div>


  );
}

export default Home;
