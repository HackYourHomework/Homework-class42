'use strict';

const image = document.querySelector('img');
  image.style.left = '0px';
  let distanceOfCat = 0;
  const maxDistanceOfCat = 1660;

  function changeCatImage(){
   if(image.src === 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'){
      image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'
   } else if (image.src === 'http://www.anniemation.com/clip_art/images/cat-walk.gif'){
      image.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'
   }}

function catWalk() {
  distanceOfCat += 10;
  image.style.left = `${distanceOfCat}px`;
  if(image.style.left === `${maxDistanceOfCat}px`){
   distanceOfCat = 0;
  } 
  if (image.style.left === `${maxDistanceOfCat / 2}px`){
   changeCatImage() // I don't understand how to stop the function for 5 seconds
  }
}

window.addEventListener('load', catWalk)
setInterval(catWalk, 50);
