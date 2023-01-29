'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

const clock = document.createElement('p');
document.body.appendChild(clock);

function addCurrentTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  clock.textContent = time;
  return time;
}
setInterval(addCurrentTime, 1000);

window.addEventListener('load', addCurrentTime);
