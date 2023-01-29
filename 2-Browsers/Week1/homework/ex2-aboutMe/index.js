'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const spanList = document.querySelectorAll('span');
[spanList[0].textContent, spanList[1].textContent, spanList[2].textContent] = [
  'Ozgur',
  'Fish',
  'Turkey',
];

const listItems = document.querySelectorAll('li');
listItems.forEach((listItem) => (listItem.className = 'list-item'));

document.body.style.fontFamily = 'Arial, sans-serif';
