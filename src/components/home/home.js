import React from 'react'
import './home.scss';
import logoJussi from '../img/logo-jussi.png';

function Home() {
  return (

    <div className="HomePage">
        <header className="HomeHeader">
        <img src={logoJussi} alt={"logo-jussi"}/>
        <span> Nossas soluções</span>
        <span > Conheça a Jussi</span>
        </header>
    </div>





  );
}

export default Home;
