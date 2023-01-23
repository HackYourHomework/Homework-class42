'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.getElementById('nickname').textContent = 'Badar';
document.getElementById('fav-food').textContent = 'Pizza';
document.getElementById('hometown').textContent = 'Netherlands';
const listItems = document.querySelectorAll('li');
listItems.forEach(function (item) {
  item.classList.add('list-item');
});
