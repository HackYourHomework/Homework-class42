'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function requestData(url) {
  try {
    const response = await fetch(url);
    const dataJson = await response.json();
    return dataJson;
  } catch (e) {
    throw new Error(e);
  }
}

function renderImage(data) {
  const renderImg = document.createElement('img');
  renderImg.src = data.img;
  renderImg.alt = 'comic';
  document.body.appendChild(renderImg);

  console.log(data);
}

function renderError(error) {
  const renderError = document.createElement('h1');
  renderError.textContent = error;
  document.body.appendChild(renderError);

  console.log(error);
}

async function main() {
  try {
    const loadAPI = await requestData('https://xkcd.now.sh/?comic=latest');
    await renderImage(loadAPI);
  } catch (e) {
    renderError(e);
  }
}

window.addEventListener('load', main);
