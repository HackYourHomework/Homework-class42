'use strict';

const image = document.querySelector('img');
image.style.left = '0px';
let distance = 0;
const speed = 10;
window.addEventListener('load', catWalk);
let interval;


function catWalk() {
   distance = distance + speed;
   image.style.left = `${distance}px`
   if(distance > window.innerWidth / 2){
      clearInterval(interval);
      image.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      setTimeout(() => {
        image.src =
          'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        interval = setInterval(catWalk, 50);
      }, 5000);
    }
    if (distance > window.innerWidth) {
      image.style.left = '0px';
      return;
    }
    image.style.left = `${distance + speed}px`;
}
setInterval(catWalk, 50)