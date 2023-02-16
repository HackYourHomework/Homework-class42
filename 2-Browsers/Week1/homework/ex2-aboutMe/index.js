'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const myName = document.querySelector('#nickname');
myName.textContent = 'Mike';
const myFavoriteFood = document.querySelector('#fav-food');
myFavoriteFood.textContent = 'Sea Food';
const myHometown = document.querySelector('#hometown');
myHometown.textContent = 'Earth';
const allLiItems = document.querySelectorAll('li');
allLiItems.forEach((item) => item.classList.add('list-item'));
