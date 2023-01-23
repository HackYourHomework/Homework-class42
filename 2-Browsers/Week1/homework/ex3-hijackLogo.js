'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const googleLogo = document.querySelector('.lnXdpd');
  googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();

// First I tried with this code and it worked on google.com devtool. But it failed in the test so I changed it with the code above.
/* 
const googleLogo = document.querySelector('.lnXdpd');
  const newLogo = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogo.setAttribute('src', newLogo);
  googleLogo.setAttribute('srcset', newLogo); */
