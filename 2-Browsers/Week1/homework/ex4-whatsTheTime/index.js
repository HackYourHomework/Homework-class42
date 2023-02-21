/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const time = new Date();
  const timeContainer = document.createElement('div');
  const clock = document.createElement('p');

  timeContainer.appendChild(clock);
  document.body.appendChild(timeContainer);
  setInterval(() => {
    clock.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    console.log(clock.textContent);
  }, 1000);
}

window.onload = function () {
  addCurrentTime();
};
