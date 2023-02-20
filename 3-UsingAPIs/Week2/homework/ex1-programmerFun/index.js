'use strict';


const body = document.body;

function requestData(url) {
  return fetch(url)
    .then((response) => {
      if (!response){
        throw new Error(response.status)
      }
      return response.json();
    })
    .then((data) => data);
}

function renderImage(data) {
  body.innerHTML = '';
  const img = document.createElement('img');
  img.src = data['img'];

  body.appendChild(Img);
}

function renderError(error) {
  body.innerHTML = '';
  const h1 = document.createElement('h1');
  body.appendChild(h1);
  h1.innerHTML = `${error} `;
}

async function main() {
  try {
    const res = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(res);
  } catch (error) {
    renderError(error.message);
  }
}

window.addEventListener('load', main);
