'use strict';

async function requestData(url) {
  const response = await fetch(url)
  const jsonData = await response.json()

  if(response.ok){
    console.log(jsonData)
    return jsonData
  } else {
    throw new Error('HTTP error')
  }

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
    await renderImage(data)
  } catch (error) {
    await renderError(error)
  }

}

window.addEventListener('load', main);
