import React from 'react'

import './home.scss';

//  START - imagens
import logoJussi from '../img/logo-jussi.png';
import carrinho from '../img/carrinho.png';
import banner from '../img/hero-banner.png';
import brastemp from '../img/logo-brastemp.png';
import compraCerta from '../img/logo-compra-certa.png';
import consul from '../img/logo-consul.png';
import theBar from '../img/logo-thebar.png';
import jussi from '../img/image-jussi.png';
import contactInfo from '../img/contact-info.png';
import newsletter from '../img/newletter.png';
import footer from '../img/footer.png';
//  END - imagens



function Home() {


  
  return (

    <div className="HomePage">
      {/* <header className="HomePage__HomeHeader">
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

      </header> */}

      <body>

        <div className="HomePage__banner">
        <img src={banner} alt={"banner Jussi"} />

        </div>

         <div className="tipbar">

          <div>Nossas principais lojas VTEX <span>→</span></div>
          <div><img src={brastemp} alt={"Brastemp"} /></div>
          <div><img src={compraCerta} alt={"Compra Certa"} /></div>
          <div><img src={consul} alt={"Consul"} /></div>
          <div><img src={theBar} alt={"The Bar"} /></div>

        </div> 

        <div className="soluctions">
          <h1><span className="soluctions__details"> //</span> Nossas Soluções</h1>
          <div className="soluctions__productsList">

            <div className="soluctions__product-one">
              <div className="soluctions__productTitle">P1</div>
              <div className="soluctions__productName">Nome do Produto #1</div>
              <div className="soluctions__productDescription">Descrição do produto #1</div>
              <div className="soluctions__productFeature">• Feature 1</div>
              <div className="soluctions__productFeature">• Feature 2</div>
              <div className="soluctions__productFeature">• Feature 3</div>
              <div className="soluctions__productButton">Ver solução</div>
            </div>

            <div className="soluctions__product-two">
              <div className="soluctions__productTitle">P2</div>
              <div className="soluctions__productName">Nome do Produto #2</div>
              <div className="soluctions__productDescription">Descrição do produto #2</div>
              <div className="soluctions__productFeature">• Feature 1</div>
              <div className="soluctions__productFeature">• Feature 2</div>
              <div className="soluctions__productFeature">• Feature 3</div>
              <div className="soluctions__productButton">Ver solução</div>
            </div>

            <div className="soluctions__product-three">
              <div className="soluctions__productTitle">P3</div>
              <div className="soluctions__productName"> Nome do Produto #3</div>
              <div className="soluctions__productDescription">Descrição do produto #3</div>
              <div className="soluctions__productFeature">• Feature 1</div>
              <div className="soluctions__productFeature">• Feature 2</div>
              <div className="soluctions__productFeature">• Feature 3</div>
              <div className="soluctions__productButton">Ver solução</div>
            </div>

            <div className="soluctions__product-four">
              <div className="soluctions__productTitle">P4</div>
              <div className="soluctions__productName">Nome do Produto #4</div>
              <div className="soluctions__productDescription">Descrição do produto #4</div>
              <div className="soluctions__productFeature">• Feature 1</div>
              <div className="soluctions__productFeature">• Feature 2</div>
              <div className="soluctions__productFeature">• Feature 3</div>
              <div className="soluctions__productButton">Ver solução</div>
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

        <div className="contactContent">
          <img src={contactInfo} alt={"Contato Jussi"} />
        </div>

        <div className="newsletterContent">
          <img src={newsletter} alt={"Newsletter"} />
        </div>

      </body>

    </div>


  );

}

  export default Home
