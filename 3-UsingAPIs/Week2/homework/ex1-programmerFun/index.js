'use strict';

async function requestData(url) {
  const response = await fetch(url)
  if(!response.ok){
    throw new Error('HTTP error')
  }
  
  return await response.json()


}

function renderImage(data) {
  const body = document.querySelector('body') 
  const img = document.createElement('img')
  img.setAttribute('alt','some pic')
  img.src = data.img
  body.appendChild(img)
}

function renderError(error) {
  const body = document.querySelector('body')
  const h1 = document.createElement('h1')
  h1.textContent = error;
  body.appendChild(h1)

}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest')
    renderImage(data)
  } catch (error) {
    renderError(error)
  }

}

window.addEventListener('load', main);
