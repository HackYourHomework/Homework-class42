'use strict';

const image = document.querySelector('img');
image.style.left = '0px';
let interval = window.setInterval(catWalk, 50);



function catWalk() {
  const leftPosition = parseInt(image.style.left);
  image.style.left = leftPosition + 10 + 'px';
  if (leftPosition > window.innerWidth - image.width) {
    image.style.left = '0px';
  }
  const middlePosition =
    Math.floor((window.innerWidth / 2 - image.width / 2) / 10) * 10;
  if (leftPosition === middlePosition) {
    image.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    setTimeout(() => {
      interval = setInterval(catWalk, 50);
      image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    }, 5000);
    clearInterval(interval);
  } else if (leftPosition > window.innerWidth - image.width) {
    image.style.left = 0 + 'px';
  }
}
window.addEventListener('load', catWalk);