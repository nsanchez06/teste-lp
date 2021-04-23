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
import jussi from '../img/image-jussi.png';
//  END - imagens



function Home() {
  return (

    <html className="HomePage">
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

      <body>

        <div className="HomePage__banner">
          <div className="HomePage__banner__conteudo">
            <span className="HomePage__banner__details">//</span>
            <span className="HomePage__banner__text">criamos lojas que vendem mais.</span>
            <span className="HomePage__banner__text-dois">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</span>
            <div className="HomePage__banner__button">Veja nossas soluções</div>

            <div className="HomePage__banner__products">
              <div className="product-left">
                <img src={geladeira} alt={"product"} />
              </div>
            </div>

          </div>
        </div>

        <div className="tipbar">

          <span>Nossas principais lojas VTEX</span>
          <div><img src={brastemp} alt={"Brastemp"} /></div>
          <div><img src={compraCerta} alt={"Compra Certa"} /></div>
          <div><img src={consul} alt={"Consul"} /></div>
          <div><img src={theBar} alt={"The Bar"} /></div>

        </div>

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



        <div className="quemSomos">

          <div className="quemSomos__textContent">
            <div className="quemSomos__title"> Olá, somos a Jüssi</div>
            <div className="quemSomos__text">
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
            </div>
          </div>

          <div className="quemSomos__imagem">
          <img src={jussi} alt={"Jussi"} />
          </div>

        </div>





        <div className="informationsContent">

          <div className="informationsContent__text">

            <div>
            Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua. 
            </div>
            <div>Entre em contato</div>
            <div>comercial@jussi.com.br</div>

          </div>

        </div>

        <div className="newsletterContent">
          <div className="newsletterContent__text">
          receba novidades da nossa área de produtos digitais.
          </div>

          <div className="newsletterContent__input">

          <div>Digite seu email</div>
          <div>cadastrar</div>

          </div>
        </div>

      </body>

      <footer className="footerContent">
        <div className="footerContent__logo-company">

        </div>
        <div className="footerContent__redes-sociais">

        </div>
      </footer>




    </html>


  );
}

export default Home;
