'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickName = document.getElementById('nickname');
nickName.textContent = 'Nojd';
const favoriteFood = document.getElementById('fav-food');
favoriteFood.textContent = 'Noddles';
const homeTown = document.getElementById('hometown');
homeTown.textContent = 'Kobani';

const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = 'list-item';
}
