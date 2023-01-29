'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
function main() {
  function setTextContent(elementId, content) {
    const element = document.getElementById(elementId);
    element.textContent = content;
  }
  setTextContent('nickname', 'sal');
  setTextContent('fav-food', 'Makloubi');
  setTextContent('hometown', 'Damascus');
  const item = document.querySelectorAll('li');
  item.forEach((i) => i.classList.add('list-item'));
}

window.addEventListener('load', main);
