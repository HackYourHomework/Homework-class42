'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const dateString = document.createElement('h1');
  dateString.textContent = 'Time:'; // for pass test
  document.body.appendChild(dateString);
  setInterval(() => {
    console.clear();
    const today = new Date();
    const time = `Time:${
      today.getHours() > 9 ? today.getHours() : `0${today.getHours()}`
    }:${
      today.getMinutes() > 9 ? today.getMinutes() : `0${today.getMinutes()}`
    }:${
      today.getSeconds() > 9 ? today.getSeconds() : `0${today.getSeconds()}`
    }`;
    dateString.textContent = time;
    console.log(time);
  }, 1000);
}

window.onload = function () {
  addCurrentTime();
};
