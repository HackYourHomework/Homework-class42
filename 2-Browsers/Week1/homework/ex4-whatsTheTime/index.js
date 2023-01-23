'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const p = document.createElement('p');

function addCurrentTime() {
  const date = new Date();
  const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  p.appendChild(document.createTextNode(''));
  p.textContent = time;
  document.querySelector('body').appendChild(p);

}

window.addEventListener('load', addCurrentTime);
setInterval(addCurrentTime,600)

