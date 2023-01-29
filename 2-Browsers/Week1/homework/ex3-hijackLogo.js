'use strict';

function hijackGoogleLogo() {
  const img = document.querySelector('img[alt="Google"]');
  img.width = 272;
  img.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBr-FYR6fsOqgUcOSnddoy8riOonhbMZIPQ&usqp=CAU';
  img.srcset =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBr-FYR6fsOqgUcOSnddoy8riOonhbMZIPQ&usqp=CAU';
}

hijackGoogleLogo();
