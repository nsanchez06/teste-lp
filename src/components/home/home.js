import React from 'react'

import '../home/home.scss';

//  START - imagens
import logoJussi from '../img/logo-jussi.png';
import carrinho from '../img/carrinho.png';
import geladeira from '../img/product-dois.png';
import brastemp from '../img/logo-brastemp.png';
import compraCerta from '../img/logo-compra-certa.png';
import consul from '../img/logo-consul.png';
import theBar from '../img/logo-thebar.png';
//  END - imagens



function Home() {
  return (

  <div className="HomePage">
          {/* START - HEADER */}
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
        {/* END - HEADER */}

        {/* START - banner */}
        <div className="HomePage__banner">
            <div className="HomePage__banner__conteudo">
            <span className="HomePage__banner__details">//</span>
            <span className="HomePage__banner__text">criamos lojas que vendem mais.</span>
            <span className="HomePage__banner__text-dois">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</span>
            <div className="HomePage__banner__button">Veja nossas soluções</div>

            <div className="HomePage__banner__products">
              <div className="product-left">
                <img src={geladeira} alt={"product"}/>
              </div>
            </div>

            </div>
        </div>
        {/* END - banner */}

        {/* START - tipar lojas */}
        <div className="tipbar">

          <span>Nossas principais lojas VTEX</span>
          <div><img src={brastemp} alt={"Brastemp"}/></div>
          <div><img src={compraCerta} alt={"Compra Certa"}/></div>
          <div><img src={consul} alt={"Consul"}/></div>
          <div><img src={theBar} alt={"The Bar"}/></div>

        </div>
        {/* END - tipar lojas */}

        {/* START - products */}
        <div className="soluctions">
          <h1>Nossas Soluções</h1>
          <div className="soluctions__products">

            <div className="soluctions__product-one">
              <div>P1</div>
              <div>Nome do Produto #1</div>
              <div>Descrição do produto #1</div>
              <div>Feature 1</div>
              <div>Feature 2</div>
              <div>Feature 3</div>
              <div>Ver solução</div>
            </div>

            <div className="soluctions__product-two">
              <div>P2</div>
              <div>Nome do Produto #2</div>
              <div>Descrição do produto #2</div>
              <div>Feature 1</div>
              <div>Feature 2</div>
              <div>Feature 3</div>
              <div>Ver solução</div>
            </div>
            
            <div className="soluctions__product-three">
              <div>P3</div>
              <div>Nome do Produto #3</div>
              <div>Descrição do produto #3</div>
              <div>Feature 1</div>
              <div>Feature 2</div>
              <div>Feature 3</div>
              <div>Ver solução</div>
            </div>

            <div className="soluctions__product-four">
              <div>P4</div>
              <div>Nome do Produto #4</div>
              <div>Descrição do produto #4</div>
              <div>Feature 1</div>
              <div>Feature 2</div>
              <div>Feature 3</div>
              <div>Ver solução</div>
            </div>

          </div>

        </div>

        {/* END - products */}

        {/* START - quem somos */}

        <div className="">
          <div className="">
            
          </div>
          
          <div className="">

          </div>
        </div>

        {/* END - quem somos */}

        {/* START - footer informations */}
        <div>
          <div>

          </div>
        </div>
        {/* END - footer informations */}

        {/* START - footer */}
        <div>
          <div>

          </div>
          <div>
            
          </div>
        </div>
        {/* END - footer */}




    </div>


  );
}

export default Home;
