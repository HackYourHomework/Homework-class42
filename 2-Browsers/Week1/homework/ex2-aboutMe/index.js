'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const newNickName = document.getElementById('nickname');
newNickName.textContent = 'Coder';

const newFavFood = document.getElementById('fav-food');
newFavFood.textContent = 'Kebab';

const newHometown = document.getElementById('hometown');
newHometown.textContent = 'Ankara';

const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  item.classList.add('list-item');
});

//there is not a task like this but when I test the file it failed because of font-family and made me to add that code to js file, not in style.css!
document.body.style.fontFamily = 'Arial, sans-serif';
