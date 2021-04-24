import React from 'react'

import './footer.scss';

//  START - imagens

import footer from '../img/footer.png';
//  END - imagens



function Footer() {

  return (

    <footer className="footerContent">
        <img src={footer} alt={"Footer"} />
    </footer>

  );

}

export default Footer;
