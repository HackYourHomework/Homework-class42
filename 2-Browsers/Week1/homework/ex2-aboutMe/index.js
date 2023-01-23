'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const myNickname = document.getElementById('nickname');
const myFood = document.getElementById('fav-food');
const myHometown = document.getElementById('hometown');

myNickname.textContent = 'MrWhite';
myFood.textContent = 'Olive oil wrap';
myHometown.textContent = 'Turkey';

const li = document.querySelectorAll('li');
li.forEach((li) => li.classList.add('list-item'));

const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
