'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.style.textAlign = 'center';
  container.style.margin = '0px auto';
  container.style.marginTop = '200px';
  setInterval(() => {
    const time = new Date();
    container.textContent = `Local Time is: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }, 1000);
}

window.addEventListener('load', addCurrentTime);
