'use strict';

function hijackGoogleLogo() {
  const logo = document.querySelector("img[alt='Google']"); 
logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';


}

hijackGoogleLogo();
