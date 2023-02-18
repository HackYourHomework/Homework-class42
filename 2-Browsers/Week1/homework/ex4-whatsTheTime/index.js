'use strict';

const p = document.createElement('p');

function addCurrentTime() {
  const date = new Date();
  const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  p.appendChild(document.createTextNode(''));
  p.textContent = time;
  document.querySelector('body').appendChild(p);

} 

window.addEventListener('load', addCurrentTime);
setInterval(addCurrentTime, 600)


