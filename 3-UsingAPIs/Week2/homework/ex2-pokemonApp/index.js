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
//const proxy = 'https://cors-anywhere.herokuapp.com/';
const url =
  ' https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon?limit=151';
const selectElement = document.createElement('select');
document.body.appendChild(selectElement);

const imgElement = document.createElement('img');
document.body.appendChild(imgElement);

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Network Error: ', error);
  }
}
/* function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error');
      }
      const jsonData = response.json();
      return jsonData;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(`Network error!`);
      throw error;
    });
} */

async function fetchAndPopulatePokemons() {
  try {
    const data = await fetchData(url);
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    return console.log('Error: ', error);
  }
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.url;
  } catch (error) {
    console.log('Error:', error);
  }
}

async function main() {
  try {
    await fetchAndPopulatePokemons();
    selectElement.addEventListener('change', async () => {
      const pokemon = selectElement.value;
      const url = ` https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      await fetchImage(url);
    });
  } catch (error) {
    console.log('Error: ', error);
  }
}

window.addEventListener('load', main);
